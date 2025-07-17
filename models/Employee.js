const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

const EmployeeModel = mongoose.model("employee", EmployeeSchema);

// ✅ export the model, not just the schema
module.exports = EmployeeModel;
