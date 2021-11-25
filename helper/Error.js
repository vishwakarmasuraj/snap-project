const { ErrorLogModel } = require('../models');

const sendDefaultError = (err, req, res) => {
    let error = err;
    console.log(error);
    try {
        error = JSON.parse(JSON.stringify(err));
    } catch (error) {
        error = err.message;
    }
    ErrorLogModel.create({
        data: error,
        createdIP: getIp(req),
    })
    return res.status(500).json({
        message:
            err && err.message
                ? err.message
                : "An unknown error occured while completing your request. Out engineers are notified",
    });
};

const createError = (err, req = null) => {
    ErrorLogModel.create({
        data: err,
        createdIP: getIp(req),
    });
};

module.exports = {
    sendDefaultError,
    createError
};