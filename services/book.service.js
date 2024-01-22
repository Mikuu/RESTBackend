const mongoose = require("mongoose");
const { BookSchema } = require("../models/book.model");
const { bookUuid } = require("../utils/uuid.utils");

const Book = new mongoose.model('Book', BookSchema);

const fetchBooks = async () => {
    return await Book.find({});
};

const searchBooks = async (condition) => {
    return await Book.find(condition);
};

const getBook = async (bid) => {
    return await Book.findOne({bid});
};

const updateBook = async (filterOptions, updateOptions) => {
    const res = await Book.updateOne(filterOptions, updateOptions);
    return res.modifiedCount;
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
    const  res = await Book.deleteOne({bid});
    return res.deletedCount;
};

module.exports = {
    fetchBooks,
    searchBooks,
    getBook,
    createBook,
    deleteBook,
    updateBook
}
