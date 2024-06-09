// const mongoose = require('mongoose');

// const blogSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   content: {
//     type: String,
//     required: true,
//   },
//   image: {
//     type: String,
//   },
//   author: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User', // Make sure this matches the name of your User model
//     required: true,
//   },
//   comments: [
//     {
//       content: {
//         type: String, 
//         required: true,
//       },
//       user: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User',
//       },
//       replies: [
//         {
//           content: {
//             type: String,
//             required: true,
//           },
//           user: {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: 'User',
//           },
//         },
//       ],
//     },
//   ],
//   likes: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'User',
//     },
//   ],
//   dislikes: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'User',
//     },
//   ],
// }, { timestamps: true });

// module.exports = mongoose.model('Blog', blogSchema);
// const mongoose = require('mongoose');

// const blogSchema = new mongoose.Schema({
//   title: String,
//   content: String,
//   image: String,
//   author: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now
//   },
//   // other fields...
// });

// const Blog = mongoose.model('Blog', blogSchema);
// module.exports = Blog;

const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  }, 
  image: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

  comments: [
    {
      content: {
        type: String, 
        required: true,
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      replies: [
        {
          content: {
            type: String,
            required: true,
          },
          user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
          },
        },
      ],
    },
  ],
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  dislikes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],







  createdAt: {
    type: Date,
    default: Date.now,
  }, 

});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
