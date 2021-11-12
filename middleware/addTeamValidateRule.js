const { body } = require('express-validator')
const TeamAdd = require('../models/addTeam')
const teamAddValidateRule = () => {
    return [
        body('name').notEmpty()
            .custom(value => {
                return TeamAdd.findOne({ name: value }).then(user => {
                    if (user) {
                        return Promise.reject('name is already exist')
                    }
                })
            }),
        body('email').notEmpty()
            .custom(value => {
                return TeamAdd.findOne({ email: value }).then(user => {
                    if (user) {
                        return Promise.reject('Email is already exist')
                    }
                })
            }),
        body('role').notEmpty(),
        body('status').notEmpty(),
    ]
}

module.exports = { teamAddValidateRule }