const express = require("express");
const MessageModel = require('../models/message');
const mongoose = require('mongoose');
const router = express.Router();

//Get All Events
router.get('', (req, res, next) => {

    MessageModel.find(function(err,messages){
      if(err){
        res.send(err);
      }
      else{
        res.setHeader('Content-Type',"application/json"); 
        res.end(JSON.stringify(messages, null, 3));
      }
    })
  });

//Sumisson to view individual chat history
router.post('', (req, res, next) => {

    var room = req.body.room;

    MessageModel.find({room},function(err,messages){
        if(err){
          res.send(err);
        }
        else{
          res.setHeader('Content-Type',"application/json"); 
          res.end(JSON.stringify(messages, null, 3));
        }
      })

  });

module.exports = router;