const express = require('express');
const { employeesMock } = require('../utils/mocks/employees');

function employeesApi(app) {
  const router = express.Router();
  app.use('/api/employees', router);

  router.get('/', async function(req, res, next) {
    try {
      const employees = await Promise.resolve(employeesMock);

      res.status(200).json({
        message: 'All employees listed',
        data: employees,
      });
    } catch(err) {
      next(err);
    }
  });

  router.get('/:employeeId', async function(req, res, next) {
    try {
      const employee = await Promise.resolve(employeesMock[0]);

      res.status(200).json({
        message: '1 employee retrieved',
        data: employee,
      });
    } catch(err) {
      next(err);
    }
  });

  router.post('/', async function(req, res, next) {
    try {
      const createEmployeeId = await Promise.resolve(employeesMock[0].id);

      res.status(201).json({
        message: '1 employee created',
        data: createEmployeeId,
      });
    } catch(err) {
      next(err);
    }
  });

  router.put('/:employeeId', async function(req, res, next) {
    try {
      const updatedEmployeeId = await Promise.resolve(employeesMock[0].id);

      res.status(200).json({
        message: '1 employee updated',
        data: updatedEmployeeId,
      });
    } catch(err) {
      next(err);
    }
  });

  router.delete('/:employeeId', async function(req, res, next) {
    try {
      const deletedEmployeeId = await Promise.resolve(employeesMock[0].id);

      res.status(200).json({
        message: '1 employee deleted',
        data: deletedEmployeeId,
      });
    } catch(err) {
      next(err);
    }
  });

}

module.exports = employeesApi;
