const { body, check } = require('express-validator');
const { addTeamModel } = require('../models')

const addMemberTeam = () => {
    return [
        body('createdBy').notEmpty(),
        body('name').notEmpty()
            .custom(value => {
                return addTeamModel.findOne({ name: value }).then(user => {
                    if (user) {
                        return Promise.reject('name is already exist')
                    }
                })
            }),
        check('email').notEmpty()
            .custom(value => {
                return addTeamModel.findOne({ email: value }).then(user => {
                    if (user) {
                        return Promise.reject('email is already exist')
                    }
                })
            }),
        body('status').notEmpty()
    ]
}

module.exports = { addMemberTeam }