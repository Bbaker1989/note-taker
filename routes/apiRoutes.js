const router = require('express').Router();
const { application } = require('express');
const { notes } = require("../data/notes.json");
const fs = require('fs');

//GET Route

router.get('/notes', (req, res) => {
   res.json(notes);
});

//Function to create a new note
function createNewNote(body) {
    const note = body;
    notes.push(note);
  
    return note;
  }
//POST Route
router.post('/notes', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = notes.length.toString();
  
    // add animal to json file and animals array in this function
    const newNotes = createNewNote(req.body, notes);
  
    res.json(notes);
  });
module.exports = router;