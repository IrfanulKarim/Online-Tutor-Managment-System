var express = require('express');
//var login 	= require('./controller/login');
var userModel = require.main.require('./model/userModel');
var router = express.Router();

router.get('/', (req,res)=>{
	res.render('registration/index');
	//res.send('registration PAGE');

});

router.post('/',(req,res)=>{

	if(req.body.uname==null)
	{
		res.render("/registration/index");
	}
	if(req.body.password==null)
	{
		res.render("/registration/index");
	}

	var user={
		uname: req.body.uname,
		password: req.body.password
	};

	userModel.insert(user, function(success){
		if(success){
			res.redirect('/login');
		}else{
			res.render("/registration/index");
		}
	});
});

module.exports = router;