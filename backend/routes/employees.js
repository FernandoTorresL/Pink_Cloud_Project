const express = require('express');
const { employeesMock } = require('../utils/mocks/employees');

function employeesApi(app) {
  const router = express.Router();
  app.use('/api/employees', router);

  router.get('/', async function(req, res, next) {
    try {
      const employees = await Promise.resolve(employeesMock);

      res.status(200).json({
        data: employees,
        message: 'employees listed',
      });
    } catch(err) {
      next(err);
    }
  });
}

module.exports = employeesApi;
