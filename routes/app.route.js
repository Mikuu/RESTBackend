const express = require("express");
const router = express.Router();

router.get("/heath", function(req, res, next) {
    res.send("Service is Alive");
});

module.exports = router;
