const express = require('express');
const bodyParser = require('body-parser');
const user = require('./controller/user.controller');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
const cors = require('cors');
const { logger } = require('./utils/logger');

const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/user', user);

app.use((error, req, res, next) => {
    const status = error.status || 500;
    const message = error.message || 'Something went wrong';
    const id = error.id || 0;

    logger.error(`[${req.method}] ${req.path} >> StatusCode:: ${status}, Message:: ${message}, ID:: ${id}`);
    res.status(status).send({ id, message });
});

module.exports = app;
