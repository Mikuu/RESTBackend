const express = require("express");
const router = express.Router();
const { sleep, catchAsync, generalResponse} = require("../utils/common.utils");
const {validationResult} = require("express-validator");
const {StatusCodes} = require("http-status-codes");
const bookService = require("../services/book.service");

router.get("/health", function(req, res, next) {
    res.send("Service is Alive");
});

router.get("/blocking/:message", catchAsync(async (req, res, next) => {
    console.log(`process message: ${req.params.message}`);
    await sleep(30*1000);
    return res.send(`process ${req.params.message} completed`);
}));

module.exports = router;
