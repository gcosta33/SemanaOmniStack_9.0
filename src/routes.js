const express = require('express');

const routes = express.Router();

routes.get('/',(req,res)=>{
  return res.send("hello word")
})

routes.post('/users',(req,res)=>{
  return res.json(req.body)
})

module.exports = routes;