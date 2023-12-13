const uuid = require("uuid");

const bookUuid = () => {
    return "BID" + uuid.v4().replace(/-/g, "").toUpperCase();
};

module.exports = {
    bookUuid
}