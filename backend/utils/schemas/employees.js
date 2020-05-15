const joi = require('@hapi/joi');

const employeeIdSchema = joi.string().pattern(/^[0-9a-fA-F]{24}$/);
const employeeFirstNameSchema = joi.string().max(50);
const employeeLastNameSchema = joi.string().max(50);
const employeeJobTitleSchema = joi.string().max(30);
const employeeSalarySchema = joi.number().min(99).max(9999);
const employeeJobTypeSchema = joi.string().min(5).max(15);
const employeeActiveSchema = joi.boolean();
const employeeAvatarSchema = joi.string().uri();

const createEmployeeSchema = {
  first_name: employeeFirstNameSchema.required(),
  last_name: employeeLastNameSchema.required(),
  job_title: employeeJobTitleSchema.required(),
  salary: employeeSalarySchema.required(),
  job_type: employeeJobTypeSchema.required(),
  active: employeeActiveSchema.required(),
  avatar: employeeAvatarSchema.required(),
};

const updateEmployeeSchema = {
  first_name: employeeFirstNameSchema,
  last_name: employeeLastNameSchema,
  job_title: employeeJobTitleSchema,
  salary: employeeSalarySchema,
  job_type: employeeJobTypeSchema,
  active: employeeActiveSchema,
  avatar: employeeAvatarSchema,
};

module.exports = {
  employeeIdSchema,
  createEmployeeSchema,
  updateEmployeeSchema
};
