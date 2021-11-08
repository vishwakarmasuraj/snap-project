const mongoose = require('mongoose')
const Schema = mongoose.Schema

const projectSchema = new Schema({
    projectName: {
        type: String,
        required: true
    },
    projectStart: {
        type: String,
        required: true
    },
    projectManager: {
        type: String,
        required: true
    },
    projectCost: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Project', projectSchema)