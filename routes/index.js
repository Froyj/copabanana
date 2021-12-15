const dishesRouter = require('./dishes');
const usersRouter = require('./users');

const setupRoutes = (app) => {
  app.use('/api/dishes', dishesRouter);
  app.use('/api/users', usersRouter);
};

module.exports = setupRoutes;
