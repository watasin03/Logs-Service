const express = require('express'); 
const port = 3232;
const app = express(); 
const bodyParser = require('body-parser');
const cors = require('cors');

const logs = require('./logs');

app.use(cors())
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb'
}));

app.listen(port, () => {
    return console.log(`Example app listening on port ${port}!`);
});