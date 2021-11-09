const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    name: {
        type: Schema.Types.String,
        required: true
    },
    email: {
        type: Schema.Types.String,
        required: true
    },
    password: {
        type: Schema.Types.String,
        required: true
    }
}, { timestamps: true })

module.exports = model('User', userSchema);