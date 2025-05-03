const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all agenda
router.get('/', (req, res) => {
  db.query('SELECT * FROM agenda', (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error fetching agenda' });
    }
    res.json(result);
  });
});

// Add agenda
router.post('/', (req, res) => {
  const { nama_agenda, tgl_mulai } = req.body;

  if (!nama_agenda || !tgl_mulai) {
    return res.status(400).json({ message: 'nama_agenda and tgl_mulai are required' });
  }

  db.query('INSERT INTO agenda (nama_agenda, tgl_mulai) VALUES (?, ?)', [nama_agenda, tgl_mulai], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Failed to add agenda' });
    }
    res.status(201).json({ message: 'agenda added', id: result.insertId });
  });
});

// Update agenda
router.put('/:id', (req, res) => {
  const { nama_agenda, tgl_mulai } = req.body;
  const { id } = req.params;

  if (!nama_agenda || !tgl_mulai) {
    return res.status(400).json({ message: 'nama_agenda and tgl_mulai are required' });
  }

  db.query('UPDATE agenda SET nama_agenda=?, tgl_mulai=? WHERE id=?', [nama_agenda, tgl_mulai, id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Failed to update agenda' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'agenda not found' });
    }
    res.json({ message: 'agenda updated' });
  });
});

// Delete agenda
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  db.query('DELETE FROM agenda WHERE id=?', [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Failed to delete agenda' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'agenda not found' });
    }
    res.json({ message: 'agenda deleted' });
  });
});

module.exports = router;
