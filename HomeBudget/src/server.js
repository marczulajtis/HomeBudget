const express = require('express');
const multer = require('multer');
const cors = require('cors');
const mkdirp = require('mkdirp');
const app = express();
const PORT = 5000;
const URL = `http://localhost:${PORT}/`;

app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ PORT }` );
} );