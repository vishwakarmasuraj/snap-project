const mongoose = require('mongoose')
const Schema = mongoose.Schema

const projectSchema = new Schema({
    projectName: {
        type: String,
        required: true
    },
    projectType: {
        type: Array,
        required: true,
        enum: ['txt', 'pdf', 'file']
    }
})

module.exports = mongoose.model('Project', projectSchema)