require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');

const { router, dirname } = require('./routes/articleRoutes.js');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(dirname, 'public')));
app.use('/', router);

app.listen(process.env.SERVER_PORT || 8080, () => {
  console.log(`Server is running on port ${process.env.SERVER_PORT || 8080}`);
});
