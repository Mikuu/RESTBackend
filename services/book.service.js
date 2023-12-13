const mongoose = require("mongoose");
const { BookSchema } = require("../models/book.model");
const { bookUuid } = require("../utils/uuid.utils");

const Book = new mongoose.model('Book', BookSchema);

const fetchBooks = async () => {
    return await Book.find({});
};

const getBook = async (bid) => {
    return await Book.findOne({bid});
};

const updateBook = async (filterOptions, updateOptions) => {
    return await Book.updateOne(filterOptions, updateOptions);
};

const createBook = async (title, author, price, publishedAt) => {
    const newBook = await Book();
    newBook.bid = bookUuid();
    newBook.title = title;
    newBook.author = author;
    newBook.price = price;
    newBook.publishedAt = publishedAt;

    await newBook.save();
    return newBook;
};

const deleteBook = async (bid) => {
    const bookData = await Book.findOne({bid});
    if (!bookData) {
        return;
    }

    await Book.deleteOne({bid});

    return 1;
};

module.exports = {
    fetchBooks,
    getBook,
    createBook,
    deleteBook,
    updateBook
}