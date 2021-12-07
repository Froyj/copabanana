require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const setupRoutes = require('./routes');
setupRoutes(app);

// error handling middleware
const handleError =  require('./utils/error-handler')
app.use((err, req, res, next) => {
  console.log('error:', req.method, req.path, err.message);
  handleError(err, res);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})