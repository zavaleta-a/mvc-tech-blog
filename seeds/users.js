const { User } = require("../models");

const userData = [
  {
    username: "Dexter",
    password: "Password1",
  },
  {
    username: "Megan",
    password: "Password2!",
  },
  {
    username: "Michael",
    password: "Password34",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
