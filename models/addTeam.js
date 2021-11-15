const { Schema, model } = require('mongoose');

const addTeamSchema = new Schema({
    createdBy: {
        _id: { default: Schema.Types.ObjectId }
    },
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
        enum: ['Active', 'Inactive']
    }
}, { timestamps: true })

module.exports = model('TeamAdd', addTeamSchema)