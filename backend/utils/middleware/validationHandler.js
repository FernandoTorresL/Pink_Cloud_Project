const boom = require('@hapi/boom');
const joi = require('@hapi/joi');

function validate(data, schema) {
  // const { error } = joi.validate(data, schema);
  // It change the way in joi is used. Update this line
  const { error } = joi.object(schema).validate(data);

  return error;
}

function validationHandler(schema, check = "body") {
  return function(req, res, next) {
    const error = validate(req[check], schema);

    error ? next(boom.badRequest(error)) : next();
  };
}

module.exports = validationHandler;
