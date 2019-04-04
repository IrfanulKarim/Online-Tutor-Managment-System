var db = require('./db');

module.exports={
	validate: function(user, callback){
		var sql = "select * from user where username='"+user.uname+"' and password='"+user.password+"'";
		
		db.getResult(sql, function(result){
			callback(result);
		});
	},

	insert: function(user, callback){
		var sql = "insert into user values (null, '"+user.uname+"','"+user.password+"')";
		db.execute(sql, function(status){
			callback(status);
		});
	},

	get: function(userId, callback){
		var sql = "select * from user where id="+userId;

		db.getResult(sql, function(result){
			callback(result);
		});
	},
	getTution: function(searchT, callback){
		var sql = "select * from tution where name='"+searchT.tname+"'";

		db.getResult(sql, function(results){
			callback(results);
		});
	},



	update: function(user, callback){
		var sql = "update user set username='"+user.uname+"',password='"+user.password+"' where id="+user.id;
		db.execute(sql, function(status){
			callback(status);
		});
	},

	getAll: function(callback){
		var sql = "select * from tution";
		db.getResult(sql, function(results){
			callback(results);
		});
	},


}