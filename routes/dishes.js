const router = require('express').Router();
const Dishes = require('../models/Dishes');
const CustomError = require('../utils/CustomError');

router.get('/', async (req, res, next) => {
  try {
    const dishes = await Dishes.findAll();
    if(dishes.length === 0) {
      throw new CustomError(404, 'No dishes found!')
    }
    res.status(200).json(dishes);
  } catch (err) {
    next(err)
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const dish = await Dishes.findOne(id).then(result => result[0]);
    if(!dish) {
      throw new CustomError(404, 'No dish found for this id!')
    }
    res.status(200).json(dish);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { name, image } = req.body;
    if(!name || !image) {
      throw new CustomError(400, 'Please specify a name and an image for this dish!')
    }
    const { insertId } = await Dishes.create(req.body);
    res.status(201).json({ id: insertId, ...req.body });
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { affectedRows } = await Dishes.updateOne(id, req.body);
    if(affectedRows === 0) {
      throw new CustomError(404, 'No dish to update for this id!')
    }
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { affectedRows } = await Dishes.deleteOne(id);
    if(affectedRows === 0) {
      throw new CustomError(404, 'No dish to delete for this id!')
    }
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

module.exports = router;