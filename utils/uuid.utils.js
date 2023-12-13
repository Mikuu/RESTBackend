const uuid = require("uuid");

export const bookUuid = () => {
    return "BID" + uuid.v4().replace(/-/g, "");
};
