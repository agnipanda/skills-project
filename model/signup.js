var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var signSchema = new Schema({
	name: {type:String,required:true},
	email: {type:String,required:true},
	phone: {type:String,required:true},
	roomid: {type:String,required:true},
	password: {type:String,required:true}
});

var signModel = mongoose.model('sign',signSchema);
module.exports = signModel;