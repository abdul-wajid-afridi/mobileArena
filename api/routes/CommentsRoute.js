const {
  getRelatedComments,
  postComments,
} = require("../controllers/CommentsController");

const routes = require("express").Router();

routes.post("/comments/:id", getRelatedComments);
routes.post("/post/comments/:id", postComments);

module.exports = routes;
