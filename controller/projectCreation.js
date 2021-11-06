const Project = require('../models/createProject')
const constants = require('../constant/allConstants')
const { successHandler, errorHandler } = require('../helper/responseHandler')

const projectCreate = async (req, res) => {
    try {
        console.log(req.body)
        const create = await new Project(req.body)
        await create.save()
        successHandler(res, constants.PROJECT_CREATE_SUCCESS_MSG)
    } catch (error) {
        errorHandler(res, error)
    }
}

module.exports = { projectCreate }