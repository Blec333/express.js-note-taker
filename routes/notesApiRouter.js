const router = require('express').Router();
const { readFromFile, writeToFile, readAndAppend } = require('../helpers/fsUtils');// read/write files
const uuid = require('../helpers/uuid');//generates a unique id



// GET Route for retrieving all the notes
router.get('/notes', (req, res) => {
  console.info(`${req.method} request received for notes`);
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});





module.exports = router;
