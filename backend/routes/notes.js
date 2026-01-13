const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const {
  createNote,
  getNotes,
  getNoteById,
  updateNote,
  deleteNote
} = require('../controllers/notesController');

// All routes are protected (require authentication)
router.use(protect);

// /api/notes
router.route('/')
  .post(createNote)    // Create note
  .get(getNotes);      // Get all notes

// /api/notes/:id
router.route('/:id')
  .get(getNoteById)    // Get single note
  .put(updateNote)     // Update note
  .delete(deleteNote); // Delete note

module.exports = router;
