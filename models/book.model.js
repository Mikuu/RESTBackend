"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Build Schema
 */
const BookSchema = new Schema({
    bid: { type: String, default: "", trim: true, maxlength: 50 },
    title: { type: String, default: "", trim: true, maxlength: 500 },
    author: { type: String, default: "", trim: true, maxlength: 50 },
    price: { type: Number, default: 0 },
    publishedAt: { type: String, default: "", trim: true, maxlength: 500 },
}, { timestamps: true });

/**
 * Validations
 */
BookSchema.path("bid").required(true, "bid cannot be blank");
BookSchema.path("title").required(true, "title cannot be blank");
BookSchema.path("author").required(true, "author cannot be blank");

/**
 * Methods
 */
BookSchema.methods = {};

module.exports = {
    BookSchema
};
