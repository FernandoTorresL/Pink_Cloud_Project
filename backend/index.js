const express = require('express');

const app = express();

const { config } = require('./config/index');
const employeesApi = require('./routes/employees.js');

employeesApi(app);

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});
