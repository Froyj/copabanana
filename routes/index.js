const dishesRouter = require('./dishes');
const proposalsRouter = require('./proposals');

const setupRoutes = (app) => {
  app.use('/dishes', dishesRouter);
  app.use('/proposals', proposalsRouter);
};

module.exports = setupRoutes;
