// const express = require("express");
// const { 
//   createBlogPost, 
//   getAllBlogPosts, 
//   deleteBlogPost, 
//   likeBlogPost, 
//   unlikeBlogPost, 
//   addComment, 
//   deleteComment, 
//   addReply, 
//   deleteReply ,
//   getBlogPost,
//   userBlogControlller,
//   deleteBlogController,
//   getBlogByIdController
// } = require("../controllers/blogController");
// const { authMiddleware } = require("../middleware/authMiddleware");

// const router = express.Router();

// // Create a new blog post
// router.post("/createBlogPost", authMiddleware, createBlogPost);
 
// // Get all blog posts
// router.get("/getAllBlogPosts", getAllBlogPosts);

// // Get a single blog post by ID
// router.get("/getBlogPost/:id", getBlogPost);

// // Delete a blog post by ID
// router.delete("/:id", authMiddleware, deleteBlogPost);

// // Like a blog post
// router.post("/:id/like", authMiddleware, likeBlogPost);

// // Unlike a blog post
// router.post("/:id/unlike", authMiddleware, unlikeBlogPost);

// // Add a comment to a blog post
// router.post("/:id/comments", authMiddleware, addComment);

// // Delete a comment from a blog post
// router.delete("/:postId/comments/:commentId", authMiddleware, deleteComment);

// // Add a reply to a comment on a blog post
// router.post("/:postId/comments/:commentId/replies", authMiddleware, addReply);

// // Delete a reply from a comment on a blog post
// router.delete("/:postId/comments/:commentId/replies/:replyId", authMiddleware, deleteReply);


// //GET || user blog
// router.get("/user-blog/:id", userBlogControlller);


// //DELETE || delete blog
// router.delete("/delete-blog/:id", deleteBlogController);

// //GET || SIngle Blog Details
// router.get("/get-blog/:id", getBlogByIdController);


// module.exports = router;


const express = require("express");
const { 
  createBlogPost, 
  getAllBlogPosts, 
  deleteBlogPost, 
  likeBlogPost, 
  unlikeBlogPost, 
  addComment, 
  deleteComment, 
  addReply, 
  deleteReply ,
  getBlogPost,
  userBlogControlller,
  deleteBlogController,
  getBlogByIdController,
  updateBlogController
} = require("../controllers/blogController");
const { authMiddleware } = require("../middleware/authMiddleware");

const router = express.Router();

// Create a new blog post
router.post("/createBlogPost", authMiddleware, createBlogPost);

// Get all blog posts
router.get("/getAllBlogPosts", getAllBlogPosts);

// // Get a single blog post by ID
// router.get("/getBlogPost/:id", getBlogPost);

// Delete a blog post by ID
router.delete("/:id", authMiddleware, deleteBlogPost);

// Like a blog post
router.post("/:id/like", authMiddleware, likeBlogPost);

// Unlike a blog post
router.post("/:id/unlike", authMiddleware, unlikeBlogPost);

// Add a comment to a blog post
router.post("/:id/comments", authMiddleware, addComment);

// Delete a comment from a blog post
router.delete("/:postId/comments/:commentId", authMiddleware, deleteComment);

// Add a reply to a comment on a blog post
router.post("/:postId/comments/:commentId/replies", authMiddleware, addReply);

// Delete a reply from a comment on a blog post
router.delete("/:postId/comments/:commentId/replies/:replyId", authMiddleware, deleteReply);

// Get user-specific blogs
router.get("/user-blog/:id", userBlogControlller);

// Delete a blog post
router.delete("/delete-blog/:id", deleteBlogController);

// Get a single blog by ID
router.get("/get-blog/:id", getBlogByIdController);
//PUT || update blog
router.put("/update-blog/:id", updateBlogController);

module.exports = router;
