const { addTeamModel } = require('../models')
const { successHandler, errorHandler } = require('../helper/responseHandler');
const constants = require('../constant/allConstants');

const teamMember = async (req, res) => {
    try {
        console.log(req.body)
        const add = await new addTeamModel({ createdBy: req.userData.createdBy, name: req.body.name, email: req.body.email, status: req.body.status })
        await add.save()
        successHandler(res, constants.ADD_TEAM_SUCCESS);
    } catch (error) {
        return errorHandler(res, constants.error)
    }
};

const getMember = async (req, res) => {
    try {
        const result = await addTeamModel.find({})
        successHandler(res, constants.PRODUCT_CREATE_SUCCESS_MSG, result)
    } catch (error) {
        return errorHandler(res, constants.error)
    }
};

module.exports = { teamMember, getMember }
