/* eslint-disable class-methods-use-this */
const { employeesMock } = require('../utils/mocks/employees');

class EmployeesService {
  async getEmployees() {
    const employees = await Promise.resolve(employeesMock);
    return employees || [];
  }

  async getEmployee() {
    const employee = await Promise.resolve(employeesMock[0].id);
    return employee || {};
  };

  async createEmployee() {
    const createdEmployeeId = await Promise.resolve(employeesMock[0].id);
    return createdEmployeeId;
  }

  async updateEmployee() {
    const updatedEmployeeId = await Promise.resolve(employeesMock[0].id);
    return updatedEmployeeId;
  }

  async deleteEmployee() {
    const deletedEmployeeId = await Promise.resolve(employeesMock[0].id);
    return deletedEmployeeId;
  }

};

module.exports = EmployeesService;
