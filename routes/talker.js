const express = require('express');

const router = express.Router();

const { addTalker } = require('../middlewares/add-talker');
const { allAuths } = require('../middlewares/auth-talker');
const { authToken } = require('../middlewares/auth-token');
const { deleteTalker } = require('../middlewares/delete-talker');
const { editTalker } = require('../middlewares/edit-talker');
const { findTalker } = require('../middlewares/find-talker');
const { getTalkers } = require('../middlewares/get-talkers');

// 1 - Crie o endpoint GET /talker

router.get('/', getTalkers);

// 2 - Crie o endpoint GET /talker/:id

router.get('/:id', findTalker);

// 4 - Crie o endpoint POST /talker

router.post('/', authToken, allAuths, addTalker);

// 5 - Crie o endpoint PUT /talker/:id

router.put('/:id', authToken, allAuths, editTalker);

// 6 - Crie o endpoint DELETE /talker/:id

router.delete('/:id', authToken, deleteTalker);

module.exports = router;
