const express = require("express");
const router = express.Router();
const { StatusCodes } = require('http-status-codes');
const { generalResponse, catchAsync} = require("../utils/common.utils");
const { check, query, validationResult } = require("express-validator");
const bookService = require("../services/book.service");

router.post("/book", [
        check("title", "title must be provided").matches(/^[ a-zA-Z0-9]+$/),
        check("author", "author must be provided").matches(/^[ a-zA-Z]+$/),
        check("price", "price must be provided").isNumeric,
        check("publishedAt", "publishedAt must be provided").isDate,
    ],
    catchAsync(async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(StatusCodes.BAD_REQUEST).json(generalResponse(errors.array()).failed);
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

        const book = await bookService.getBook(req.query.bid);

        return res.status(StatusCodes.OK).send(book);
    })
);


module.exports = router;
