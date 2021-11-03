const User = require("./user");
const Posts = require("./posts");
const Comments = require("./comments");

User.hasMany(Posts, {
  foreignKey: "user_id",
});

Posts.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Comments, {
  foreignKey: "user_id",
});

Comments.belongsTo(User, {
  foreignKey: "user_id",
});

Posts.hasMany(Comments, {
  foreignKey: "post_id",
});

Comments.belongsTo(Posts, {
  foreignKey: "posts_id",
});

module.exports = { User, Posts, Comments };
