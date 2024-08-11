const path = require('path');
const express = require('express');
const { articlesController } = require('../controllers/articleController.js');

const router = express.Router();
const dirname = path.resolve();

router.get('/articles', articlesController);

router.get('/', (_, response) => {
  response.sendFile(path.join(dirname, 'public', 'index.html'));
});

module.exports = { router, dirname };
