var express = require('express');
var router = express.Router();
var signup = require('../controller/signup');
var login = require('../controller/login');
/* GET home page. */
router.post('/signup',signup.signUser);

router.post('/login',login.logUser);

router.get('/logsign',function(req, res, next) {
	if (req.session.user) {
   		res.redirect('/home');
} 	else 
		res.render('logsign',{msg:"Retry"});
});

// router.get('/', function(req, res, next) {
//     if(req.session.user){
//      	isLoggedIn = true;
//     }
//     else 
//     	isLoggedIn = false;
//     res.render('index', {"isLoggedIn" : isLoggedIn});
// });

router.get('/home',function(req,res){
	if (req.session.user) {
		var msg=req.session.user;
        res.render('home', {details:msg});
} else res.redirect("/logsign");
});

router.get('/issues',function(req,res){
	if (req.session.user) {
		var msg=req.session.user;
        res.render('issues', {details:msg});
} else res.redirect("/logsign");
});

router.get('/status',function(req,res){
	if (req.session.user) {
		var msg=req.session.user;
        res.render('status', {details:msg});
} else res.redirect("/logsign");
});

module.exports = router;