const TeamAdd = require('../models/addTeam')
const { successHandler, errorHandler } = require('../helper/responseHandler')
const constants = require('../constant/allConstants')

const addTeamMember = async (req, res) => {
    try {
        const add = await new TeamAdd({ name: req.body.name, email: req.body.email, role: req.body.role, status: req.body.status })
        save(add)
        successHandler(res, constants.TEAM_ADD_SUCCESS)
    } catch (error) {
        errorHandler(res, error)
    }
}

module.exports = { addTeamMember }