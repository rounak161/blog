// const Blog = require("../models/blogModel");

// // Create a new blog post
// exports.createBlogPost = async (req, res) => {
//     try {
//       const { title, content, image } = req.body;
  
//       // Create new blog post
//       const newBlogPost = new Blog({
//         title,
//         content,
//         image: image || null, // Store image URL if provided
//         author: req.user._id, // Set the author to the authenticated user's ID
//       });
  
//       // Save blog post to database
//       await newBlogPost.save();
  
//       res.status(201).json({ message: "Blog post created successfully", data: newBlogPost });
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   };
// // Get all blog posts
// exports.getAllBlogPosts = async (req, res) => {
//   try {
//     const blogPosts = await Blog.find().populate("author", "name email"); // Populate author details
//     res.json(blogPosts);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Delete a blog post by ID
// exports.deleteBlogPost = async (req, res) => {
//     try {
//       const blogPostId = req.params.id;
  
//       // Find the blog post
//       const blogPost = await Blog.findById(blogPostId);
//       if (!blogPost) {
//         return res.status(404).json({ message: "Blog post not found" });
//       }
  
//       // Check if the authenticated user is the author of the blog post
//       if (blogPost.author.toString() !== req.user._id.toString()) {
//         return res.status(403).json({ message: "Unauthorized to delete this blog post" });
//       }
  
//       // Delete the blog post
//       await Blog.deleteOne({ _id: blogPostId });
  
//       res.json({ message: "Blog post deleted successfully" });
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   };
  

// // Like a blog post
// exports.likeBlogPost = async (req, res) => {
//     try {
//       const postId = req.params.id;
  
//       // Find the blog post
//       const blogPost = await Blog.findById(postId);
//       if (!blogPost) {
//         return res.status(404).json({ message: "Blog post not found" });
//       }
  
//       // Check if the user has already liked the post
//       const alreadyLiked = blogPost.likes.includes(req.user._id);
//       if (alreadyLiked) {
//         return res.status(400).json({ message: "You have already liked this post" });
//       }
  
//       // Add the user's ID to the list of likes
//       blogPost.likes.push(req.user._id);
//       await blogPost.save();
  
//       res.json({ message: "Blog post liked successfully", data: blogPost.likes });
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   };
  
//   // Unlike a blog post
//   exports.unlikeBlogPost = async (req, res) => {
//     try {
//       const postId = req.params.id;
  
//       // Find the blog post
//       const blogPost = await Blog.findById(postId);
//       if (!blogPost) {
//         return res.status(404).json({ message: "Blog post not found" });
//       }
  
//       // Check if the user has liked the post
//       const alreadyLikedIndex = blogPost.likes.indexOf(req.user._id);
//       if (alreadyLikedIndex === -1) {
//         return res.status(400).json({ message: "You have not liked this post" });
//       }
  
//       // Remove the user's ID from the list of likes
//       blogPost.likes.splice(alreadyLikedIndex, 1);
//       await blogPost.save();
  
//       res.json({ message: "Blog post unliked successfully", data: blogPost.likes });
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   };




//   // Add a comment to a blog post
// exports.addComment = async (req, res) => {
//     try {
//       const postId = req.params.id;
//       const { content } = req.body;
  
//       // Find the blog post
//       const blogPost = await Blog.findById(postId);
//       if (!blogPost) {
//         return res.status(404).json({ message: "Blog post not found" });
//       }
  
//       // Add the comment to the blog post
//       blogPost.comments.push({ content, user: req.user._id });
//       await blogPost.save();
  
//       res.status(201).json({ message: "Comment added successfully", data: blogPost.comments });
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   };
  
//   // Delete a comment from a blog post
//   exports.deleteComment = async (req, res) => {
//     try {
//       const postId = req.params.postId;
//       const commentId = req.params.commentId;
  
//       // Find the blog post
//       const blogPost = await Blog.findById(postId);
//       if (!blogPost) {
//         return res.status(404).json({ message: "Blog post not found" });
//       }
  
//       // Find the comment in the blog post
//       const comment = blogPost.comments.id(commentId);
//       if (!comment) {
//         return res.status(404).json({ message: "Comment not found" });
//       }
  
//       // Check if the authenticated user is the author of the comment
//       if (comment.user.toString() !== req.user._id.toString()) {
//         return res.status(403).json({ message: "Unauthorized to delete this comment" });
//       }
  
//       // Remove the comment from the blog post
//       comment.remove();
//       await blogPost.save();
  
//       res.json({ message: "Comment deleted successfully" });
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   };


// // Add a reply to a comment on a blog post
// exports.addReply = async (req, res) => {
//     try {
//       const postId = req.params.postId;
//       const commentId = req.params.commentId;
//       const { content } = req.body;
  
//       // Find the blog post
//       const blogPost = await Blog.findById(postId);
//       if (!blogPost) {
//         return res.status(404).json({ message: "Blog post not found" });
//       }
  
//       // Find the comment in the blog post
//       const comment = blogPost.comments.id(commentId);
//       if (!comment) {
//         return res.status(404).json({ message: "Comment not found" });
//       }
  
//       // Add the reply to the comment
//       comment.replies.push({ content, user: req.user._id });
//       await blogPost.save();
  
//       res.status(201).json({ message: "Reply added successfully", data: comment.replies });
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   };
  
//   // Delete a reply from a comment on a blog post
//   exports.deleteReply = async (req, res) => {
//     try {
//       const postId = req.params.postId;
//       const commentId = req.params.commentId;
//       const replyId = req.params.replyId;
  
//       // Find the blog post
//       const blogPost = await Blog.findById(postId);
//       if (!blogPost) {
//         return res.status(404).json({ message: "Blog post not found" });
//       }
  
//       // Find the comment in the blog post
//       const comment = blogPost.comments.id(commentId);
//       if (!comment) {
//         return res.status(404).json({ message: "Comment not found" });
//       }
  
//       // Find the reply in the comment
//       const reply = comment.replies.id(replyId);
//       if (!reply) {
//         return res.status(404).json({ message: "Reply not found" });
//       }
  
//       // Check if the authenticated user is the author of the reply
//       if (reply.user.toString() !== req.user._id.toString()) {
//         return res.status(403).json({ message: "Unauthorized to delete this reply" });
//       }
  
//       // Remove the reply from the comment
//       reply.remove();
//       await blogPost.save();
  
//       res.json({ message: "Reply deleted successfully" });
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   };
   








const Blog = require("../models/blogModel");
const User = require("../models/userModel");

// Create a new blog post
exports.createBlogPost = async (req, res) => {
  try {
    const { title, content, image } = req.body;

    // Create new blog post
    const newBlogPost = new Blog({ 
      title,
      content,
      image, // Store image path if provided
      author: req.user._id, // Set the author to the authenticated user's ID
    });

    // Save blog post to database
    await newBlogPost.save();

    // Add blog post ID to the user's blogs array
    await User.findByIdAndUpdate(req.user._id, { $push: { blogs: newBlogPost._id } });

    res.status(201).json({ 
      success:true,
      message: "error in user blog", 
      data: newBlogPost });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

 
 

// Get all blog posts
exports.getAllBlogPosts = async (req, res) => {
  try {
    const blogPosts = await Blog.find().populate('author', 'name email');
    console.log('Fetched blog posts:', blogPosts); // Logging the fetched blog posts
    res.json({
      success: true,
      message: 'Blogs shared with you',
      blogPosts: blogPosts,
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error); // Logging errors
    res.status(500).json({ error: error.message });
  }
};

 
 

// Delete a blog post by ID
exports.deleteBlogPost = async (req, res) => {
  try {
    const blogPostId = req.params.id;

    // Find the blog post
    const blogPost = await Blog.findById(blogPostId);
    if (!blogPost) {
      return res.status(404).json({ message: "Blog post not found" });
    }

    // Check if the authenticated user is the author of the blog post
    if (blogPost.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Unauthorized to delete this blog post" });
    }

    // Delete the blog post
    await Blog.findByIdAndDelete(blogPostId);

    // Remove blog post ID from the user's blogs array
    await User.findByIdAndUpdate(req.user._id, { $pull: { blogs: blogPostId } });

    res.json({ message: "Blog post deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Like a blog post
exports.likeBlogPost = async (req, res) => {
  try {
    const postId = req.params.id;

    // Find the blog post
    const blogPost = await Blog.findById(postId);
    if (!blogPost) {
      return res.status(404).json({ message: "Blog post not found" });
    }

    // Check if the user has already liked the post
    const alreadyLiked = blogPost.likes.includes(req.user._id);
    if (alreadyLiked) {
      return res.status(400).json({ message: "You have already liked this post" });
    }

    // Add the user's ID to the list of likes
    blogPost.likes.push(req.user._id);
    await blogPost.save();

    res.json({ message: "Blog post liked successfully", data: blogPost.likes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Unlike a blog post
exports.unlikeBlogPost = async (req, res) => {
  try {
    const postId = req.params.id;

    // Find the blog post
    const blogPost = await Blog.findById(postId);
    if (!blogPost) {
      return res.status(404).json({ message: "Blog post not found" });
    }

    // Check if the user has liked the post
    const alreadyLikedIndex = blogPost.likes.indexOf(req.user._id);
    if (alreadyLikedIndex === -1) {
      return res.status(400).json({ message: "You have not liked this post" });
    }

    // Remove the user's ID from the list of likes
    blogPost.likes.splice(alreadyLikedIndex, 1);
    await blogPost.save();

    res.json({ message: "Blog post unliked successfully", data: blogPost.likes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a comment to a blog post
exports.addComment = async (req, res) => {
  try {
    const postId = req.params.id;
    const { content } = req.body;

    // Find the blog post
    const blogPost = await Blog.findById(postId);
    if (!blogPost) {
      return res.status(404).json({ message: "Blog post not found" });
    }

    // Add the comment to the blog post
    blogPost.comments.push({ content, user: req.user._id });
    await blogPost.save();

    res.status(201).json({ message: "Comment added successfully", data: blogPost.comments });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a comment from a blog post
exports.deleteComment = async (req, res) => {
    try {
      const postId = req.params.postId;
      const commentId = req.params.commentId;
  
      // Find the blog post
      const blogPost = await Blog.findById(postId);
      if (!blogPost) {
        return res.status(404).json({ message: "Blog post not found" });
      }
  
      // Find the comment in the blog post
      const commentIndex = blogPost.comments.findIndex((comment) => comment._id.toString() === commentId);
      if (commentIndex === -1) {
        return res.status(404).json({ message: "Comment not found" });
      }
  
      // Check if the authenticated user is the author of the comment
      if (blogPost.comments[commentIndex].user.toString() !== req.user._id.toString()) {
        return res.status(403).json({ message: "Unauthorized to delete this comment" });
      }
  
      // Remove the comment from the blog post
      blogPost.comments.splice(commentIndex, 1); // Use splice() to remove the comment
      await blogPost.save();
  
      res.json({ message: "Comment deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
// Add a reply to a comment on a blog post
exports.addReply = async (req, res) => {
  try {
    const postId = req.params.postId;
    const commentId = req.params.commentId;
    const { content } = req.body;

    // Find the blog post
    const blogPost = await Blog.findById(postId);
    if (!blogPost) {
      return res.status(404).json({ message: "Blog post not found" });
    }

    // Find the comment in the blog post
    const comment = blogPost.comments.id(commentId);
    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    // Add the reply to the comment
    comment.replies.push({ content, user: req.user._id });
    await blogPost.save();

    res.status(201).json({ message: "Reply added successfully", data: comment.replies });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Delete a reply from a comment on a blog post
exports.deleteReply = async (req, res) => {
  try {
    const postId = req.params.postId;
    const commentId = req.params.commentId;
    const replyId = req.params.replyId;

    // Find the blog post
    const blogPost = await Blog.findById(postId);
    if (!blogPost) {
      return res.status(404).json({ message: "Blog post not found" });
    }

    // Find the comment in the blog post
    const comment = blogPost.comments.id(commentId);
    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    // Find the reply in the comment
    const reply = comment.replies.id(replyId);
    if (!reply) {
      return res.status(404).json({ message: "Reply not found" });
    }

    // Check if the authenticated user is the author of the reply
    if (reply.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Unauthorized to delete this reply" });
    }

    // Remove the reply from the comment
    reply.remove();
    await blogPost.save();

    res.json({ message: "Reply deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
 
 //GET USER BLOG
exports.userBlogControlller = async (req, res) => {
  try {
    //const userBlog = await User.findById(req.params.id).populate("blogs");
    
    const userBlog = await User.findById(req.params.id).populate({
      path: 'blogs',
      populate: { path: 'author', select: 'name' }
    });
    if (!userBlog) {
      return res.status(404).send({
        success: false,
        message: "blogs not found with this id",
      });
    }
    return res.status(200).send({
      success: true,
      message: "user blogs",
      userBlog,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "error in user blog",
      error,
    });
  }
};

 //Delete Blog
exports.deleteBlogController = async (req, res) => {
  try {
    const blog = await Blog
      // .findOneAndDelete(req.params.id)
      .findByIdAndDelete(req.params.id)
      .populate("author");
    await blog.author.blogs.pull(blog);
    await blog.author.save();
    return res.status(200).send({
      success: true,
      message: "Blog Deleted!",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Erorr WHile Deleteing BLog",
      error,
    });
  }
};

//Update Blog
exports.updateBlogController = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, image } = req.body;
    const blog = await Blog.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );
    return res.status(200).send({
      success: true,
      message: "Blog Updated!",
      blog,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error WHile Updating Blog",
      error,
    });
  }
};

//SIngle Blog
exports.getBlogByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).send({
        success: false,
        message: "blog not found with this is",
      });
    }
    return res.status(200).send({
      success: true,
      message: "fetch single blog",
      blog,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "error while getting single blog",
      error,
    });
  }
};

