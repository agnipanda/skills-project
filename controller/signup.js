var mongoose = require('mongoose');
var signModel = require('../model/signup');
var bcrypt = require('bcrypt');

var signUser=function(req,res){
		var signmodel = new signModel({
			name:req.body.name,
			email:req.body.email,
			phone:req.body.phone,
			regno:req.body.regno,
			password:req.body.password,
			gender:req.body.gender
		});
		// var pw = signmodel.password;
		// var saltRounds = 10;
		// var hash = bcrypt.hashSync(pw, saltRounds);
		// signmodel.password = hash;
		signmodel.save(function(err,doc){
			if(err) res.json(err);
			res.render('logsign',{msg:'alert("Registered Successfully..!!")'})
		});
};

module.exports = {"signUser":signUser};