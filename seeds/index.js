const seedComments = require("./comments");
const seedPosts = require("./posts");
const seedUsers = require("./users");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DB Synced -----\n");
  await seedUsers();
  console.log("\n----- Users Synced -----\n");
  await seedPosts();
  console.log("\n----- Posts Synced -----\n");
  await seedComments();
  console.log("\n----- Comments Synced -----\n");
  process.exit(0);
};

seedAll();
