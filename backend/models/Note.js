const mongoose = require('mongoose');

/**
 * Note Schema
 * Defines the structure of note documents in MongoDB
 */
const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  content: {
    type: String,
    required: [true, 'Please provide content'],
    maxlength: [5000, 'Content cannot exceed 5000 characters']
  },
  tags: {
    type: [String],
    default: []
  },
  color: {
    type: String,
    default: '#ffffff',
    match: [/^#[0-9A-F]{6}$/i, 'Please provide a valid hex color']
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to User model
    required: true
  }
}, {
  timestamps: true // Automatically adds createdAt and updatedAt
});


noteSchema.index({ user: 1, title: 'text', content: 'text' });

module.exports = mongoose.model('Note', noteSchema);

