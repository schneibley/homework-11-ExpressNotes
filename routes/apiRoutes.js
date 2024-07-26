
const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');


const readNotes = () => {
  const notes = fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf8');
  return JSON.parse(notes);
};

const writeNotes = (notes) => {
  fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notes));
};


router.get('/', (req, res) => {
  const notes = readNotes();
  res.json(notes);
});


router.post('/', (req, res) => {
  const newNote = {
    id: uuidv4(),
    title: req.body.title,
    text: req.body.text,
  };

  const notes = readNotes();
  notes.push(newNote);
  writeNotes(notes);

  res.json(newNote);
});


router.delete('/:id', (req, res) => {
  const notes = readNotes();
  const updatedNotes = notes.filter((note) => note.id !== req.params.id);
  writeNotes(updatedNotes);

  res.json({ message: 'Note deleted' });
});

module.exports = router;