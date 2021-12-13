const dishesRouter = require('./dishes');

const setupRoutes = (app) => {
  app.use('/dishes', dishesRouter);
};

module.exports = setupRoutes;
