let mongodbUrl;

switch (process.env.REST_ENV) {
    case "docker":
        mongodbUrl = `mongodb://${process.env.REST_DB_USERNAME}:${process.env.REST_DB_PASSWORD}@amb-mongodb:28008/restabase`;
        break;
    default:
        mongodbUrl = `mongodb://${process.env.REST_DB_USERNAME}:${process.env.REST_DB_PASSWORD}@127.0.0.1:28008/restabase`;
        break;
}

module.exports = {
    mongodbUrl,
};
