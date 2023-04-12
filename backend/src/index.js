const express = require('express');
const mongoose = require('mongoose');
const path  = require('path');
const cors = require('cors');
const bodyParser=require('body-parser');



const app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
// app.post('/login', (req, res) => {
//     console.log(req.body)
//
// });

const server = require('http').Server(app); // server supports http protocol
const io = require('socket.io')(server); // websocket requests

mongoose.connect('mongodb://localhost:27017/uploads',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
});







// creating our own middleware
app.use((req, res, next) => {
    req.io = io;

    next();
})


app.use(cors());

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resizeds')));

//app.set('view engine', 'ejs');

app.use(require('./routes'));



server.listen(3333);
