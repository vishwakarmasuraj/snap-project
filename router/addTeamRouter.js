const express = require('express');
const router = express();
const { addTeamValidateRule, valid, auth } = require('./../middleware');
const { addTeamController } = require('./../controller');

/**
 * 
 */
router.post('/add-team', addTeamValidateRule.teamAddValidateRule(), valid.validate, addTeamController.addTeamMember)

module.exports = router