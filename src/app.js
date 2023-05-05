const express = require('express');
const bodyParser = require('body-parser');
const user = require('./controller/user.controller');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

const app = express();

app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/user', user);

app.use((er, req, res, next) => res.send(er.message));

module.exports = app;
