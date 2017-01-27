const bodyParser = require('body-parser');
const massive = require('massive');
const config = require('./config.js');
const cors = require('cors');
const session = require('express-session');
const express = require('express');
const app = express();


app.use(express.static(__dirname + '/dist'));
const massiveInstance = massive.connectSync({connectionString: config.dbConnect});
app.set('db', massiveInstance);
const db = app.get('db');
const corsOptions = {origin: 'config.IPAdress'};
// const serverCtrl = require('./serverCtrl.js');
app.use(cors(corsOptions));
app.use(session({
  secret: config.sessionSecret,
  saveUninitialized: false,
  resave: false
}));
app.use(bodyParser.json());


app.listen(8000, function(){
    console.log('starting')
})