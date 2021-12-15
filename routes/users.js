const router = require('express').Router();
const Users = require('../models/Users');

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await Users.findOne(id).then((result) => result[0]);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { insertId } = await Users.create(req.body);
    res.status(201).json({ id: insertId, ...req.body, role_id: 2 });
  } catch (err) {
    next(err);
  }
});

const argon2 = require('argon2');
const { generateToken } = require('../services/auth');

router.post('/register', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOneByEmail(email).then((result) => result[0]);
    if (user) {
      res.sendStatus(409);
    } else {
      const hash = await argon2.hash(req.body.password);
      const { insertId } = await Users.create({ ...req.body, password: hash });
      res.status(201).json({ id: insertId, ...req.body, role_id: 2 });
    }
  } catch (err) {
    next(err);
  }
});

router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOneByEmail(email).then((result) => result[0]);
    const isVerified = await argon2.verify(user.password, req.body.password);
    if (isVerified) {
      const token = generateToken(user);
      res.cookie('access-token', token).status(201).send('ok');
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    next(err);
  }
});

const { auth } = require('../services/auth');

router.delete('/:id',
  auth,
  (req, res, next) => {
    console.log(req.user)
    if (req.user.role_id === 1) {
      next()
    } else {
      res.sendStatus(403)
    }
  },
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const { affectedrows } = await Users.deleteOne(id);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
