const express = require('express'); 
const config = require('config');
const port = 3232;
const app = express(); 
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

app.use(cors())
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb'
}));

app.use(morgan('dev'))