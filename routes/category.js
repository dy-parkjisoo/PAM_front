// const express = require('express');
// const router = express.Router();
// const category = require('../models/Category');
// const {ensureAuthenticated} = require('../libs/auth');

//   // 지수 추가

//   router.get('/data', ensureAuthenticated, (req, res) => {
//     res.render('category/data');
//   });

//   router.get('/envi', ensureAuthenticated, (req, res) => {
//     res.render('category/envi');
//   });

//   router.get('/user', ensureAuthenticated, (req, res) => {
//     res.render('category/user');
//   });

  
// module.exports = router;


var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/data', function(req, res, next) {
  res.render('category/data', { title: 'data' });
});

module.exports = router;

