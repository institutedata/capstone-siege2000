const express = require("express");
const router = express.Router();
const Controllers = require("../controllers"); //index.js

router.get("/", (req, res) => {
  Controllers.postController.getPosts(res);
});
router.get("/:id", (req, res) => {
  Controllers.postController.getPost(req, res);
});
router.post("/create", (req, res) => {
  Controllers.postController.createPost(req.body, res);
});
// matches PUT requests to /api/Posts/123 (stores 123 in id param)
router.put("/:id", (req, res) => {
  Controllers.postController.updatePost(req, res);
});
// matches DELETE requests to /api/Posts/123 (123 in id param)
router.delete("/:id", (req, res) => {
  Controllers.postController.deletePost(req, res);
});

module.exports = router;
