const express = require('express');
const router = express.Router();

const { auth, addTeamValidRule, valid } = require('../middleware');

const { addTeamController } = require('../controller')

router.post('/add-team', auth.verifyToken, addTeamValidRule.addMemberTeam(), valid.validate, addTeamController.teamMember);

module.exports = router