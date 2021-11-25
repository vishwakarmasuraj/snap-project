const { Schema, model } = require('mongoose');

const ErrorLogSchema = new Schema({
    data: {
        type: Schema.Types.Mixed,
    },
    createdIP: {
        type: Schema.Types.String,
    },
    createdAt: {
        type: Schema.Types.Date,
        default: Date.now
    },
});

module.exports = model('error_log', ErrorLogSchema)