const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const handleProposalCreation = async (req, res) => {
  const result = await prisma.proposal.create({
    data: {
      ...req.body,
    },
  });
  res.status(201).json({
    success: true,
    payload: result,
  });
};

const handleProposalListRetrieval = async (req, res) => {
  const results = await prisma.proposal.findMany();
  res.status(200).json({
    success: true,
    payload: results,
  });
};

const handleProposalRetrieval = async (req, res) => {
  const id = parseInt(req.params.id);
  const result = await prisma.proposal.findUnique({ where: { id } });
  res.status(200).json({
    success: true,
    payload: result,
  });
};

const handleProposalUpdate = async (req, res) => {
  const id = parseInt(req.params.id);
  const result = await prisma.proposal.update({
    where: { id },
    data: {
      ...req.body,
    },
  });
  res.status(200).json({
    success: true,
    payload: result,
  });
};

const handleProposalDeletion = async (req, res) => {
  const id = parseInt(req.params.id);
  await prisma.proposal.delete({
    where: { id },
  });
  res.sendStatus(204);
};

module.exports = {
  handleProposalCreation,
  handleProposalListRetrieval,
  handleProposalUpdate,
  handleProposalDeletion,
  handleProposalRetrieval,
};
