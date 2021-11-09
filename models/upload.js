const mongoose = require('mongoose')
const Schema = mongoose.Schema

const uploadSchema = new Schema({
    image: {
        data: Buffer,
        contentType: String
    },
    url: {
        type: String
    }
}, { timestamps: true })

module.exports = mongoose.model('Upload', uploadSchema)