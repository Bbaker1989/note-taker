//require express server
const express = require('express');

//Star5t app and create port
const app = express ();
const PORT = process.env.PORT || 3001;

//require HTML routes
const htmlRoutes = require('./routes/htmlRoutes');

//app.use to parse incoming data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//app.use router to set up different html routes
app.use('/', htmlRoutes);


//Server on the port
app.listen(PORT, () => {
    console.log(`APP listening on port: ${PORT}!`)
});
