const router = require('express').Router();
const {
  handleOrderCreation,
  handleOrderListRetrieval,
  handleOrderUpdate,
  handleOrderDeletion,
  handleOrderRetrieval,
} = require('../controllers/orders.js');
const {
  orderCreationValidation,
  orderUpdateValidation,
} = require('../middlewares/validations/orders.js');
const asyncHandler = require('../helpers/async-handler.js');

router.post('/', [orderCreationValidation, asyncHandler(handleOrderCreation)]);
router.get('/', handleOrderListRetrieval);
router.get('/:id', handleOrderRetrieval);
router.put('/:id', [orderUpdateValidation, asyncHandler(handleOrderUpdate)]);
router.delete('/:id', handleOrderDeletion);

module.exports = router;