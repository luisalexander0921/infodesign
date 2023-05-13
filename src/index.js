'use strict'

const express = require("express");
const fileUpload = require('express-fileupload')
const path = require("path");
const app = express();
const http = require('http');
const server = http.createServer(app);
global.server = server;
app.use(fileUpload());

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

app.use(express.static(path.join(__dirname, '../public')));

const cors = require('cors');
const corsOptions = {
   origin: "*",
   credentials: true
};
app.use(cors(corsOptions));

app.use(express.json());
require('../config/database');

app.use('/', require('../routes/get-repositories'));
app.use('/', require('../routes/odd-numbers'));


app.listen(3000);
console.log('Servidor on port', 3000);