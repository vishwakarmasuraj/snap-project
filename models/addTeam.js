const { Schema, model } = require('mongoose');

const addTeamSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    role: {
        type: String,
    },
    status: {
        type: String,
    }
}, { timestamps: true })

module.exports = model('TeamAdd', addTeamSchema)