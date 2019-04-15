const express = require("express");
const RoomModel = require('../models/room');
const mongoose = require('mongoose');
const router = express.Router();

router.get('', (req, res, next) => {
    console.log('ROOMS GET');
    RoomModel.find(function(err,rooms){
    if(err){
        res.send(err);
    }
    else{
        res.setHeader('Content-Type',"application/json"); 
        res.end(JSON.stringify(rooms, null, 3));
    }})
});

router.post('', (req, res, next) => {
    console.log('ROOMS POST');
    let room = req.body;
    if(!room.name || !room.status){
        res.status(400);
        console.log('ERROR ADDING ROOM');
    }
    else{
        RoomModel.create(room).then(room => {
            res.status(200).json(room);
        });
    }
});

module.exports = router;