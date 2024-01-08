let mongodbUrl;

switch (process.env.REST_ENV) {
    case "containerized":
        mongodbUrl = `mongodb://${process.env.REST_DB_USERNAME}:${process.env.REST_DB_PASSWORD}@${process.env.REST_DB_HOST}:${process.env.REST_DB_PORT}/restabase`;
        break;
    default:
        mongodbUrl = `mongodb://${process.env.REST_DB_USERNAME}:${process.env.REST_DB_PASSWORD}@127.0.0.1:28008/restabase`;
        break;
}

module.exports = {
    mongodbUrl,
};
