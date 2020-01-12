import preval from "babel-plugin-preval/macro";

const posts = preval`
  module.exports = require('./get-blog-posts.js')
`;
export default posts.posts;
