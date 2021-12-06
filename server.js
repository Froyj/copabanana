require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const logger = require('./utils/logger')


// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/error", (req, res, next) => {
  try {
    throw Error('toto')
  } catch(err) {
    next(err)
  }
})

app.post("/api/ok", (req, res, next) => {
  try {
    if(!req.body.name) {
      throw new Error('You should specify a name !')
    }
    res.status(200).json({
      status: 200,
      message: "success"
    })
    next();
  } catch(err) {
    next(err);
  }
})

// Info level logging middleware 
app.use((req, res, next) => {
  logger.info(`${req.method} - ${req.originalUrl} - ${res.statusCode}`);
  next();
})

// Error level logging middleware
app.use((err, req, res, next) => {
  logger.error(`${req.method} - ${req.originalUrl} - ${err.status || 500} - ${err.message}`);
  next(err);
})

// Error handling middleware (for user)
app.use((err, req, res, next) => {
  res.status(500).send('We got an error !')
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})