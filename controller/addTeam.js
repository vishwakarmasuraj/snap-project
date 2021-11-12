const TeamAdd = require('../models/addTeam')
const { successHandler, errorHandler } = require('../helper/responseHandler')
const constants = require('../constant/allConstants')

const addTeamMember = async (req, res) => {
    try {
        const addTeam = await new TeamAdd(req.body)
        await addTeam.save()
        successHandler(res, constants.TEAM_ADD_SUCCESS)
    } catch (error) {
        errorHandler(res, error)
    }
}


module.exports = { addTeamMember }