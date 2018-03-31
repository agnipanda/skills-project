var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var logSchema = new Schema({
	roomid: {type:String,required:true},
	password: {type:String,required:true}
});

var logModel = mongoose.model('sign',logSchema);
module.exports = logModel;