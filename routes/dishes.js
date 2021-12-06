const router = require('express').Router();
const Dishes = require('../models/Dishes');

router.get('/', async (req, res, next) => {
  try {
    const dishes = await Dishes.findAll();
    res.status(200).json(dishes);
  } catch (err) {
    next(err)
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const dish = await Dishes.findOne(id).then(result => result[0]);
    res.status(200).json(dish);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { insertId } = await Dishes.create(req.body);
    res.status(201).json({ id: insertId, ...req.body });
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { affectedrows } = await Dishes.updateOne(id, req.body);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { affectedrows } = await Dishes.deleteOne(id);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

module.exports = router;