const { Users } = require("../models");

const userData = [
  {
    email: "dexter@mail.com",
    username: "Dexter",
    password: "Password1",
  },
  {
    email: "megan@mail.com",
    username: "Megan",
    password: "Password2!",
  },
  {
    email: "michael@mail.com",
    username: "Michael",
    password: "Password34",
  },
];

const seedUsers = () => Users.bulkCreate(userData);

module.exports = seedUsers;
