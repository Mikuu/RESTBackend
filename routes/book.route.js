const express = require("express");
const router = express.Router();
const { StatusCodes } = require('http-status-codes');
const { generalResponse, catchAsync, airBook } = require("../utils/common.utils");
const { check, query, validationResult } = require("express-validator");
const bookService = require("../services/book.service");

router.post("/book", [
        check("title", "title must be provided").matches(/^[ a-zA-Z0-9]+$/),
        check("author", "author must be provided").matches(/^[ a-zA-Z]+$/),
    ],
    catchAsync(async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(StatusCodes.BAD_REQUEST).json(generalResponse(errors.array()).failed);
        }

        if (process.env.TEST_MODE === 'air') {
            return res.status(StatusCodes.CREATED).send({ bid: airBook.bid });
        }

        const createdBook = await bookService.createBook(req.body.title, req.body.author, req.body.price, req.body.publishedAt);

        return res.status(StatusCodes.CREATED).send({ bid: createdBook.bid });
    })
);

router.get("/book",
    [
        query("bid", "bid must be provided, accept letters in [a-zA-Z0-9]").matches(/^[a-zA-Z0-9]+$/),
    ],
    catchAsync(async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(StatusCodes.BAD_REQUEST).json(generalResponse(errors.array()).failed);
        }

        if (process.env.TEST_MODE === 'air') {
            return res.status(StatusCodes.OK).send(airBook);
        }

        const book = await bookService.getBook(req.query.bid);
        const bookData = book ? {
            bid: book.bid,
            title: book.title,
            author: book.author,
            price: book.price,
            publishedAt: book.publishedAt
        } : {};

        return res.status(StatusCodes.OK).send(bookData);
    })
);

router.get("/", catchAsync(async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(StatusCodes.BAD_REQUEST).json(generalResponse(errors.array()).failed);
        }

        if (process.env.TEST_MODE === 'air') {
            return res.status(StatusCodes.OK).send([airBook]);
        }

        const books = await bookService.searchBooks({ author: req.query.author });
        const bookData = books ? books.map(book => {
            return {
                bid: book.bid,
                title: book.title,
                author: book.author,
                price: book.price,
                publishedAt: book.publishedAt
            }
        }) : {};

        return res.status(StatusCodes.OK).send(bookData);
    })
);

router.put("/book/:bid",
    [
        check("bid", "bid must be provided, accept letters in [a-zA-Z0-9]").matches(/^[a-zA-Z0-9]+$/),
    ],
    catchAsync(async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(StatusCodes.BAD_REQUEST).json(generalResponse(errors.array()).failed);
        }

        if (process.env.TEST_MODE === 'air') {
            return res.status(StatusCodes.OK).send({modifiedCount: 0});
        }

        const modifiedCount = await bookService.updateBook({ bid: req.params.bid }, req.body);
        return res.status(StatusCodes.OK).send({ modifiedCount });
    })
);

router.delete("/book/:bid",
    [
        check("bid", "bid must be provided, accept letters in [a-zA-Z0-9]").matches(/^[a-zA-Z0-9]+$/),
    ],
    catchAsync(async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(StatusCodes.BAD_REQUEST).json(generalResponse(errors.array()).failed);
        }

        if (process.env.TEST_MODE === 'air') {
            return res.status(StatusCodes.OK).send({deletedCount: 0});
        }

        const deletedCount = await bookService.deleteBook(req.params.bid);
        return res.status(StatusCodes.OK).send({ deletedCount });
    })
);




module.exports = router;
