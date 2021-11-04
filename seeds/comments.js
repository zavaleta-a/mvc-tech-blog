const { Comments } = require("../models");

const commentData = [
  {
    comment_text: "First comment text",
    user_id: 001,
    post_id: 001,
  },
  {
    comment_text: "Second comment text",
    user_id: 0002,
    post_id: 0002,
  },
  {
    comment_text: "Third comment text",
    user_id: 0003,
    post_id: 003,
  },
];

const seedComments = () => Comments.bulkCreate(commentData);

module.exports = seedComments;
