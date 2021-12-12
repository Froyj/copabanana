const router = require('express').Router();
const { handleDishCreation, handleDishListRetrieval, handleDishUpdate, handleDishDeletion, handleDishRetrieval } = require('../controllers/dishes.js');

router.post('/', handleDishCreation);
router.get('/', handleDishListRetrieval);
router.get('/:id', handleDishRetrieval);
router.put('/:id', handleDishUpdate);
router.delete('/:id', handleDishDeletion);

module.exports = router;
