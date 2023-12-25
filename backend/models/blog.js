const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema(
  {
    title: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
      author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model for the author
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      updatedAt: {
        type: Date,
        default: null,
      },
    
  },
  {timestamps : true}
    
);

module.exports = mongoose.model("Blog", blogSchema);