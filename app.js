const express = require('express');
const app = express();
const routes = require('./routes/index');

app.set('view engine', 'pug');

app.use('/material', express.static(__dirname + '/node_modules/material-components-web/dist/'));
app.use('/scripts', express.static(__dirname + '/scripts/'));
app.use('/css', express.static(__dirname + '/css/'));

app.use('/',routes);

module.exports = app;