const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    fullName: {
        type: Schema.Types.String,
        required: true
    },
    workEmail: {
        type: Schema.Types.String,
        required: true
    },
    password: {
        type: Schema.Types.String,
        required: true
    },
    role: {
        type: Schema.Types.String,
        required: true
    },
    status: {
        type: Schema.Types.String,
        enum: ['active', 'Inactive'],
        default: 'active'
    }
}, { timestamps: true })

module.exports = model('User', userSchema);