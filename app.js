const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const appRouter = require("./routes/app.route");
const bookRouter = require("./routes/book.route");

const databaseUtils = require("./utils/database.utils");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:3000' }));

app.use("/", appRouter);
app.use("/books", bookRouter);

databaseUtils.connect();

module.exports = app;
