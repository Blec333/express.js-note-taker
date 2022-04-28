const express = require('express');
const path = require('path');
const htmlRouter = require('./routes/htmlRouter.js');
const apiRouter = require('./routes/notesApiRouter.js');

// Using express and defining server port
const app = express();
const PORT = process.env.PORT || 3000;



app.listen(PORT, () => {
  console.log(`Note Taker app is listening at http://localhost:${PORT}`);
});
