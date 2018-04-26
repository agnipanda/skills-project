var mongoose = require('mongoose');
var signModel = require('../model/signup');

var cancelAmount=function(req,res){
	var c=req.body;
	var bf=0,l=0,d=0;
	var date = Date.now();
	if(c.breakfast){
		bf+=25;
	}
	if(c.lunch){
		l+=25;
	}
	if(c.dinner){
		d+=25;
	}
	signModel.findOne({regno:req.session.user.regno},function(err,user){
		if(req.session.user.date == date)
		{
			req.session.user.mes="Already cancelled..!!"
			res.redirect('/home');
		}
		var t=(user.amount)-(bf+l+d);
		req.session.user.amount=t;
		console.log("t=",t);
		conditions = {regno:req.session.user.regno},
		update = {$set : {amount:t}},
		options = {multi: true};
	  	signModel.findOneAndUpdate(conditions,update,options,callback);
	  	function callback (err, numAffected) {
	  		if(err){
	  			console.log(err);
	  		}
	  		else{
	  			console.log(numAffected);
	  			res.redirect('/home');
	  		}
		};
	});
};
module.exports = {"cancelAmount":cancelAmount};