const { Posts } = require("../models");

const postData = [
  {
    title: "Post Title 1",
    content: "Content for the post made by user 1 will fill this area.",
    user_id: 0001,
  },
  {
    title: "Post Title 2",
    content: "Content for the post made by user 2 will fill this area.",
    user_id: 0002,
  },
  {
    title: "Post Title 3",
    content: "Content for the post made by user 3 will fill this area.",
    user_id: 0003,
  },
];

const seedPosts = () => Posts.bulkCreate(postData);

module.exports = seedPosts;
