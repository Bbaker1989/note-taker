
const express = require('express');
//Start APP and server
const app = express();
const PORT = process.env.PORT || 3001;


//require API routes
const apiRoutes = require('./routes/apiRoutes');

//require HTML routes
const htmlRoutes = require('./routes/htmlRoutes');
//app.use to parse incoming data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


//API Routes
app.use('/api', apiRoutes);


//app.use router to set up different html routes
app.use('/', htmlRoutes);
//Start server on port
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });
