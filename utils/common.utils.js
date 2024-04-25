const { StatusCodes } = require('http-status-codes');
const {response} = require("express");

const processLogger = (message) => {
    console.log(`CPId=${process.pid} | ${message}`);
};


const generalResponse = message => {
    return {
        succeed: {
            code: StatusCodes.OK,
            message: message,
        },
        failed: {
            code: StatusCodes.BAD_REQUEST,
            message: message,
        },
    };
};

const GResponse = {
    succeed(message) {
        return {
            code: StatusCodes.OK,
            message: message
        }
    },

    failed(message) {
        return {
            code: StatusCodes.BAD_REQUEST,
            message: message
        }
    },

    error(message) {
        return {
            code: StatusCodes.INTERNAL_SERVER_ERROR,
            message: message
        }
    },

    notFound(message) {
        return {
            code: StatusCodes.NOT_FOUND,
            message: message
        }
    }
}

const catchAsync = (asyncFunction) => {
    return (req, res, next) => {
        asyncFunction(req, res, next).catch(error => {
            console.error(error);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(GResponse.error("System Error"));
        });
    };
};

const airBook = {
    bid: "BID0TEST0MODE0AIR000000000",
    title: "TITLE-TEST-MODE-AIR",
    author: "AUTHOR-TEST-MODE-AIR",
    price: 9090950,
    publishedAt: "Published-At-TEST-MODE-AIR"
};

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = {
    processLogger,
    generalResponse,
    catchAsync,
    sleep,
    GResponse,
    airBook
}
