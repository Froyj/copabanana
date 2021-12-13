require('dotenv').config();
const express = require('express');
const app = express();
const logger = require('./helpers/logger');
const errorHandler = require('./middlewares/errors/error-handler');

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./routes')(app);

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  errorHandler(err, req, res);
});

app.listen(PORT, () => {
  logger.info(`Server listening on port ${PORT}`);
});
