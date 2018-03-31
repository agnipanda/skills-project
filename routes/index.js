var express = require('express');
var router = express.Router();
var signup = require('../controller/signup');
var login = require('../controller/login');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/logsign',function(req, res, next) {
	res.render('logsign');
});

router.post('/signup',signup.signUser);

router.post('/login',login.logUser);
module.exports = router;