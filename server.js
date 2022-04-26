const express = require('express');
const path = require('path');
const notesData = require('./db/db.json');
const PORT = process.env.PORT || 3000;

const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/notes', (req, res) => res.json(notesData));

app.listen(PORT, () => {
  console.log(`Note Taker app is listening at http://localhost:${PORT}`);
});
