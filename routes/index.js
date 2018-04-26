var express = require('express');
var router = express.Router();
var signup = require('../controller/signup');
var login = require('../controller/login');
var cancel = require('../controller/cancel');
var issue = require('../controller/issues')
/* GET home page. */

router.get('/', (req,res) => {
	res.redirect('/home')
})

router.get('/admin', (req,res) => {
	res.render('admin')
})

router.post('/signup',signup.signUser);

router.post('/login',login.logUser);

router.post('/cancel',cancel.cancelAmount);

router.post('/issues', issue.issueSave);

router.get('/logsign',function(req, res, next) {
	if (req.session.user) {
   		res.redirect('/home');
} 	else
		res.render('logsign',{msg:"Retry"});
});

router.get('/home',function(req,res){
	if (req.session.user) {
		var msg=req.session.user;
		if (req.session.user.gender=="Male") {
			hostel="RHR"
		}
		else{
			hostel="KCHR"
		}
		var mes=req.session.mes;
		req.session.mes=null;
        res.render('home', {details:msg,hos:hostel,mes:mes});
} else res.redirect("/logsign");
});

router.get('/issues',function(req,res){
	if (req.session.user) {
		var msg=req.session.user;
		if (req.session.user.gender=="Male") {
			hostel="RHR"
		}
		else{
			hostel="KCHR"
		}
        res.render('issues', {msg:"",details:msg,hos:hostel});
} else res.redirect("/logsign");
});

router.get('/contacts',function(req,res){
	if (req.session.user) {
		var msg=req.session.user;
		if (req.session.user.gender=="Male") {
			hostel="RHR"
		}
		else{
			hostel="KCHR"
		}
        res.render('contacts', {details:msg,hos:hostel});
} else res.redirect("/logsign");
});

router.get('/logout',function(req, res, next) {
	req.session.user=null;
	req.session.mes=null;
	res.redirect("/logsign");
});

module.exports = router;
