// require('log-timestamp');
const express = require("express");
const cors = require("cors");
// const logger = require("morgan");
const cookieParser = require("cookie-parser");

const appRouter = require("./routes/app.route");
const bookRouter = require("./routes/book.route");

const logger = require("./utils/logger.utils");
const morganMiddleware = require("./middlewares/morgan.middleware");

const databaseUtils = require("./utils/database.utils");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:3000' }));

app.use(morganMiddleware);
app.use("/", appRouter);
app.use("/books", bookRouter);

databaseUtils.connect();

const port = 3128;
app.listen(port, () => {
    logger.info(`REST Backend running at ${port}`);
})

module.exports = app;
