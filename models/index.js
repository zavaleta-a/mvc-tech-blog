const Users = require("./users");
const Posts = require("./posts");
const Comments = require("./comments");

Users.hasMany(Posts, {
  foreignKey: "user_id",
});

Posts.belongsTo(Users, {
  foreignKey: "user_id",
});

Users.hasMany(Comments, {
  foreignKey: "user_id",
});

Comments.belongsTo(Users, {
  foreignKey: "user_id",
});

Posts.hasMany(Comments, {
  foreignKey: "post_id",
});

Comments.belongsTo(Posts, {
  foreignKey: "posts_id",
});

module.exports = { Users, Posts, Comments };
