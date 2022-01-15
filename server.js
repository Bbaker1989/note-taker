//require express server
const express = require('express');

//require API and HTML routes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//Start app and create port

const app = express ();
const PORT = process.env.PORT || 3001;

//Server on the port
app.listen(PORT, () => {
    console.log(`APP listening on port: ${PORT}!`)
});
