const dishesRouter = require('./dishes')

const setupRoutes = (app) => {
  app.use('/api/dishes', dishesRouter);
}

module.exports = setupRoutes;