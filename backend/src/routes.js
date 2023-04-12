const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const PostController = require ('./controller/PostController');
const LikeController = require('./controller/LikeController');
const LoginController = require('./controller/LoginController');
const bodyParser=require('body-parser');
const routes = new express.Router();
const upload = multer(uploadConfig);

// routes.post('/login',bodyParser.json(),function(req,res){
//   console.log(req.body);
//   res.send(req.body.password);
// });
routes.post('/login', LoginController.store1);
routes.post('/posts', upload.single('image'), PostController.store);
routes.get('/posts', PostController.index);
//routes.get('/register', registerView);

//routes.get('/login', LoginController.index1);

routes.post('/posts/:id/like', LikeController.store);

module.exports = routes;
