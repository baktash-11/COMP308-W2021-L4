const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
//get about page
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
});
//get products page
router.get('/products', function(req, res, next) {
  res.render('index', { title: 'Products' });
});
//get services page
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});
//Get contact page
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact' });
});

module.exports = router;
