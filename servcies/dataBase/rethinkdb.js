const r = require('rethinkdb');

const database = r.db('school');

const connection = (req, res, next) => {
    r.connect({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        db: process.env.DB_DATABASE,
    }).then((conn) => {
        req.rdb = conn;
        next();
    }).error(() => {
        return (error) => {
            res.send(500, { error: error.message });
        };
    });
};

const close = (req, res, next) => {
    req.rdb.close();
};

module.exports = {
    connection,
    database,
    close,
};
