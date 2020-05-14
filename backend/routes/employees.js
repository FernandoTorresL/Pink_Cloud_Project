const express = require('express');
const EmployeesService = require('../services/employees');

function employeesApi(app) {
  const router = express.Router();
  app.use('/api/employees', router);

  const employeesService = new EmployeesService();

  router.get('/', async function(req, res, next) {
    const { tags } = req.query;

    try {
      const employees = await employeesService.getEmployees({ tags });
      // throw new Error('Error getting employees');

      res.status(200).json({
        message: 'All employees listed',
        data: employees,
      });
    } catch(err) {
      next(err);
    }
  });

  router.get('/:employeeId', async function(req, res, next) {
    const { employeeId } = req.params;

    try {
      const employee = await employeesService.getEmployee({ employeeId });

      res.status(200).json({
        message: '1 employee retrieved',
        data: employee,
      });
    } catch(err) {
      next(err);
    }
  });

  router.post('/', async function(req, res, next) {
    const { body: employee } = req;

    try {
      const createEmployeeId = await employeesService.createEmployee({ employee })

      res.status(201).json({
        message: '1 employee created',
        data: createEmployeeId,
      });
    } catch(err) {
      next(err);
    }
  });

  router.put('/:employeeId', async function(req, res, next) {
    const { employeeId } = req.params;
    const { body: employee } = req;

    try {
      const updatedEmployeeId = await employeesService.updateEmployee({
        employeeId,
        employee
      });

      res.status(200).json({
        message: '1 employee updated',
        data: updatedEmployeeId,
      });
    } catch(err) {
      next(err);
    }
  });

  router.delete('/:employeeId', async function(req, res, next) {
    const { employeeId } = req.params;

    try {
      const deletedEmployeeId = await employeesService.deleteEmployee({ employeeId })

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
