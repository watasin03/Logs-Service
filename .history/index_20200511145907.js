const express = require('express'); 
const config = require('config');
const port = config.get('ENV.PORT');
const app = express(); 
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');