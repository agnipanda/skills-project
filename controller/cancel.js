var mongoose = require('mongoose');
var signModel = require('../model/signup');

var cancelAmount=function(req,res){
	var c=req.body;
	var bf=0,l=0,d=0;
	var m_names = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
	var date = new Date();
	var curr_date = date.getDate();
	var curr_month = date.getMonth();
	var curr_year = date.getFullYear();
	date2=curr_date + "-" + m_names[curr_month] + "-" + curr_year;
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
		console.log("db_date="+user.date);
		console.log("cancel="+date2);
		if(user.date == date2){
			req.session.mes="Already cancelled..!!"
			res.redirect('/home');
		}
		else{
			var t=(user.amount)-(bf+l+d);
			req.session.user.amount=t;
			console.log("t=",t);
			conditions = {regno:req.session.user.regno},
			update = {$set : {amount:t,date:date2}},
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
		}
	});
};
module.exports = {"cancelAmount":cancelAmount};