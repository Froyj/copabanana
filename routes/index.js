const dishesRouter = require('./dishes');
const proposalsRouter = require('./proposals');
const ordersRouter = require('./orders');

const setupRoutes = (app) => {
  app.use('/dishes', dishesRouter);
  app.use('/proposals', proposalsRouter);
  app.use('/orders', ordersRouter);
};

module.exports = setupRoutes;
