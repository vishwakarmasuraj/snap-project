const Project = require('../models/createProject')
const { successHandler, errorHandler } = require('../helper/responseHandler')
const constants = require('../constant/allConstants')

const createProject = async (req, res) => {
    try {
        const result = await new Project(req.body)
        result.save()
        successHandler(res, constants.PROJECT_CREATE_SUCCESS_MSG)
    } catch (error) {
        errorHandler(res, error)
    }
}

const projectListing = async (req, res) => {
    try {
        const result = await Project.find({})
        successHandler(res, constants.PROJECT_LISTING_SUCCESS, result)
    } catch (error) {
        errorHandler(res, error)
    }
}

module.exports = { createProject, projectListing }