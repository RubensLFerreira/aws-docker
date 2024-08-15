require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');

const { router, dirname } = require('./routes/articleRoutes.js');

const server = express();
const port = process.env.SERVER_PORT;
const hostname = process.env.SERVER_HOSTNAME;

server.use(cors());
server.use(express.json());
server.use(express.static(path.join(dirname, 'public')));
server.use('/', router);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
