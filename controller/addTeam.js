const TeamAdd = require('../models/addTeam')
const { successHandler, errorHandler } = require('../helper/responseHandler')
const constants = require('../constant/allConstants')

const addTeamMember = async (req, res) => {
    try {
        const addTeam = await new TeamAdd({ name: req.body.name, email: req.body.email, role: req.body.role, status: req.body.status })
        await addTeam.save()
        return successHandler(res, constants.TEAM_ADD_SUCCESS)
    } catch (error) {
        return errorHandler(res, error)
    }

}

module.exports = { addTeamMember }