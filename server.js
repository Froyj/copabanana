require('dotenv').config();
const express = require('express');
const { UnauthorizedError } = require('express-jwt/lib');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const setupRoutes = require('./routes');
setupRoutes(app);

// error handling middleware
app.use((err, req, res, next) => {
  if (err instanceof UnauthorizedError) {
    res.sendStatus(401);
  } else {
    console.log(err);
    res
      .status(500)
      .send('Oops ! it seems that we encountered some difficulties !');
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
