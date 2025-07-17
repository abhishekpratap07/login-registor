const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel = require('./models/Employee');

const app = express();
app.use(express.json());
app.use(cors());

// Register route
app.post('/registor', (req, res) => {
  EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(error => res.json(error));
});

// Login route
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password === password) {
          res.json("success"); // ✅ fixed typo from "succes"
        } else {
          res.json("the password is wrong");
        }
      } else {
        res.json("no record here");
      }
    })
    .catch(err => res.json(err)); // ✅ Good to handle DB errors
});

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/employee");

// Start server
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
