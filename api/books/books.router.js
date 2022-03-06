const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {
  addPost,
  deletePost,
  soldPost,
  getPostById,
  getPosts,
  getSoldPosts,
  bookmarkPost,
  getBookmarks,
  deleteBookmark,
  getGenres,
} = require("./books.controller");
router.post("/add", checkToken, addPost);
router.post("/delete", checkToken, deletePost);
router.post("/sold", checkToken, soldPost);
router.post("/bookmarkPost", checkToken, bookmarkPost);
router.post("/deleteBookmark", checkToken, deleteBookmark);
router.get("/getBookmarks/:id", checkToken, getBookmarks);
router.get("/getPostById/:id", checkToken, getPostById);
router.get("/getSoldPosts/:id", checkToken, getSoldPosts);
router.get("/getPosts", checkToken, getPosts);
router.get("/getGenres", getGenres);
module.exports = router;