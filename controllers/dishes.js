const { PrismaClient } = require('@prisma/client');
const logger = require('../helpers/logger');
const prisma = new PrismaClient();

const handleDishCreation = async (req, res) => {
  const result = await prisma.dish.create({
    data: { ...req.body },
  });
  res.status(201).json({
    success: true,
    payload: result,
  });
  logger.info(`${req.method}: ${req.originalUrl} ${res.statusCode}`);
};

const handleDishListRetrieval = async (req, res) => {
  const results = await prisma.dish.findMany();
  res.status(200).json({
    success: true,
    payload: results,
  });
};

const handleDishRetrieval = async (req, res) => {
  const id = parseInt(req.params.id);
  const result = await prisma.dish.findUnique({ where: { id } });
  res.status(200).json({
    success: true,
    payload: result,
  });
};

const handleDishUpdate = async (req, res) => {
  const id = parseInt(req.params.id);
  const result = await prisma.dish.update({
    where: { id },
    data: { ...req.body },
  });
  res.status(200).json({
    success: true,
    payload: result,
  });
};

const handleDishDeletion = async (req, res) => {
  const id = parseInt(req.params.id);
  await prisma.dish.delete({
    where: { id },
  });
  res.sendStatus(204);
};

module.exports = {
  handleDishCreation,
  handleDishListRetrieval,
  handleDishUpdate,
  handleDishDeletion,
  handleDishRetrieval,
};
