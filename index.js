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


app.get('/api/get/users', (req,res)=> {
  db.get_user((err,resp)=>{
    res.json(resp) 
  })
})

app.post('/api/post/user', (req,res) => {
  console.log(req.body);
  db.post_user([req.body.userName, req.body.password], (err, resp) => {
    res.json(resp) 
  })
})

app.post('/api/get/images', (req,res)=> {
  db.get_images([req.body.user],(err,resp)=>{
    res.json(resp) 
  })
})

app.post('/api/post/image', (req,res) => {
  db.post_image([req.body.user, req.body.url, req.body.position], (err, resp) => {
    res.json(resp) 
  })
})


app.listen(4004, function(){
    console.log('started')
})