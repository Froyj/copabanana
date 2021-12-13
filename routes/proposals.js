const router = require('express').Router();
const {
  handleProposalCreation,
  handleProposalListRetrieval,
  handleProposalUpdate,
  handleProposalDeletion,
  handleProposalRetrieval,
} = require('../controllers/proposals.js');
const {
  proposalCreationValidation,
  proposalUpdateValidation,
} = require('../middlewares/validations/proposals.js');
const asyncHandler = require('../helpers/async-handler.js');

router.post('/', [proposalCreationValidation, asyncHandler(handleProposalCreation)]);
router.get('/', handleProposalListRetrieval);
router.get('/:id', handleProposalRetrieval);
router.put('/:id', [proposalUpdateValidation, asyncHandler(handleProposalUpdate)]);
router.delete('/:id', handleProposalDeletion);

module.exports = router;