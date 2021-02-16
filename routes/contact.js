const { error } = require('console');
const express = require('express');
const router = express.Router();
let mongoose = require('mongoose');
//create a reference to the db schema 
let contact =require('../models/contact');

//Get Contact List page -READ Operation 
router.get('/', (req, res, next)=>{
    contact.find((err, contactList)=>{
        if(err){
            return console.log(err)
        }else{
            console.log(contactList);
        }
        //rest.render('contacts/index;, { title: 'Contact List', contactList: contactList});
    });
});

module.exports = router;