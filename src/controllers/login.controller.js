const { StatusCodes } = require('http-status-codes');

const service = require('../services/login.service');

const login = async (req, res) => {
  const result = await service.login();

  res.status(StatusCodes.OK).json(result);
};

module.exports = {
  login,
};
