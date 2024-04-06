"use strict";

const Post = require("../models/post");

async function init() {
  await Post.sync();
  console.log("Post model synced");
}

init();

const Models = {
  Post,
};

module.exports = Models;
