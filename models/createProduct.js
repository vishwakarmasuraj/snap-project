const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    userIds: {
        type: Schema.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
}, { timestamps: true })

module.exports = mongoose.model('Product', productSchema)