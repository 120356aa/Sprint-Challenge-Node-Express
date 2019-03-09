const express = require('express');
const server = express();

const projectDB = require('./data/helpers/projectModel');
const actionsDB = require('./data/helpers/actionModel');

server.use(express.json());



server.listen(4000);