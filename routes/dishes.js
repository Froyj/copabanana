const router = require('express').Router();
const {
  handleDishCreation,
  handleDishListRetrieval,
  handleDishUpdate,
  handleDishDeletion,
  handleDishRetrieval,
} = require('../controllers/dishes.js');
const {
  dishCreationValidation,
  dishUpdateValidation,
} = require('../middlewares/validations/dishes.js');
const asyncHandler = require('../helpers/async-handler.js');

router.post('/', [dishCreationValidation, asyncHandler(handleDishCreation)]);
router.get('/', handleDishListRetrieval);
router.get('/:id', handleDishRetrieval);
router.put('/:id', [dishUpdateValidation, asyncHandler(handleDishUpdate)]);
router.delete('/:id', handleDishDeletion);

module.exports = router;
