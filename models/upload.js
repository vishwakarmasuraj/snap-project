const { Schema, model } = require('mongoose')

const uploadSchema = new Schema({
    image: {
        data: Buffer,
        contentType: String
    },
    url: {
        type: String
    }
}, { timestamps: true })

module.exports = model('Upload', uploadSchema)