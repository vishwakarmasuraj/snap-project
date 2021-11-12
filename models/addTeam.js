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
    // role: {
    //     type: String,
    //     required: true
    // },
    // status: {
    //     type: String,
    //     enum: ['Active', 'Inactive']
    // }
}, { timestamps: true })

module.exports = model('TeamAdd', addTeamSchema)