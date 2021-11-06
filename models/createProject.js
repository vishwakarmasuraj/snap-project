const mongoose = require('mongoose')
const Schema = mongoose.Schema

const projectSchema = new Schema({
    projectName: {
        type: String,
        required: true
    },
    projetStart: {
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
}, { timestamps: true })

module.exports = mongoose.model('Project', projectSchema)