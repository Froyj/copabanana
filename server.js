require('dotenv').config();
const express = require('express');
const app = express();
const logger = require('./helpers/logger');

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./routes')(app);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Oops, something broke!');
});

app.listen(PORT, () => {
  logger.info(`Server listening on port ${PORT}`);
});
