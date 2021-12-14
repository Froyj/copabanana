const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const handleOrderCreation = async (req, res) => {
  const result = await prisma.order.create({
    data: {
      ...req.body,
    },
  });
  res.status(201).json({
    success: true,
    payload: result,
  });
};

const handleOrderListRetrieval = async (req, res) => {
  const results = await prisma.order.findMany();
  res.status(200).json({
    success: true,
    payload: results,
  });
};

const handleOrderRetrieval = async (req, res) => {
  const id = parseInt(req.params.id);
  const result = await prisma.order.findUnique({ where: { id } });
  res.status(200).json({
    success: true,
    payload: result,
  });
};

const handleOrderUpdate = async (req, res) => {
  const id = parseInt(req.params.id);
  const result = await prisma.order.update({
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

const handleOrderDeletion = async (req, res) => {
  const id = parseInt(req.params.id);
  await prisma.order.delete({
    where: { id },
  });
  res.sendStatus(204);
};

module.exports = {
  handleOrderCreation,
  handleOrderListRetrieval,
  handleOrderUpdate,
  handleOrderDeletion,
  handleOrderRetrieval,
};
