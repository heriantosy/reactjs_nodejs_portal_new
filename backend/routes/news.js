const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all news
router.get('/', (req, res) => {
  db.query('SELECT * FROM news', (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error fetching news' });
    }
    res.json(result);
  });
});

// Add news
router.post('/', (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: 'Title and content are required' });
  }

  db.query('INSERT INTO news (title, content) VALUES (?, ?)', [title, content], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Failed to add news' });
    }
    res.status(201).json({ message: 'News added', id: result.insertId });
  });
});

// Update news
router.put('/:id', (req, res) => {
  const { title, content } = req.body;
  const { id } = req.params;

  if (!title || !content) {
    return res.status(400).json({ message: 'Title and content are required' });
  }

  db.query('UPDATE news SET title=?, content=? WHERE id=?', [title, content, id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Failed to update news' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'News not found' });
    }
    res.json({ message: 'News updated' });
  });
});

// Delete news
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  db.query('DELETE FROM news WHERE id=?', [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Failed to delete news' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'News not found' });
    }
    res.json({ message: 'News deleted' });
  });
});

module.exports = router;
