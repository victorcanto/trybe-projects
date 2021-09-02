const express = require('express');

const router = express.Router();

const { addTalker } = require('../middlewares/add-talker');
const { authTalker } = require('../middlewares/auth-talker');
const { authToken } = require('../middlewares/auth-token');
const { deleteTalker } = require('../middlewares/delete-talker');
const { editTalker } = require('../middlewares/edit-talker');
const { searchTalkers } = require('../middlewares/search-talker');
const { findTalker } = require('../middlewares/find-talker');
const { getTalkers } = require('../middlewares/get-talkers');

router.get('/', getTalkers);

router.get('/search', authToken, searchTalkers, getTalkers);

router.get('/:id', findTalker);

router.post('/', authToken, authTalker, addTalker);

router.put('/:id', authToken, authTalker, editTalker);

router.delete('/:id', authToken, deleteTalker);

module.exports = router;
