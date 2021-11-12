const TeamAdd = require('../models/addTeam')
const { successHandler, errorHandler } = require('../helper/responseHandler')
const constants = require('../constant/allConstants')

const addTeamMember = async (req, res) => {
    try {
        const addTeam = await new TeamAdd({ name: req.body.name, email: req.body.email, role: req.body.role, status: req.userData.status })
        await addTeam.save()
        successHandler(res, constants.TEAM_ADD_SUCCESS)
    } catch (error) {
        errorHandler(res, error)
    }
}

module.exports = { addTeamMember }