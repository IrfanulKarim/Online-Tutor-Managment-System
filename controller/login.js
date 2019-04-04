var express = require('express');
//var registration 	= require('./controller/registration');
var userModel = require.main.require('./model/userModel');
var router = express.Router();

router.get('/', (req,res)=>{
	res.render('login/index');
	//res.send('LOGIN PAGE');

});

router.post('/',(req,res)=>{

	if(req.body.uname==null)
	{
		res.render("/login/index");
	}
	if(req.body.password==null)
	{
		res.render("/login/index");
	}


	var user={
		uname: req.body.uname,
		password: req.body.password
	};

	userModel.validate(user, function(result)
		{
			if(result.length>0){
				req.session.name= req.body.uname;
				req.session.uid= result[0].id;
				res.redirect('/home');
				
			}
			else{
				//res.send("login failed")
				//alret("Invalid INPUT!!!");
				res.render("login/index");
			}
		});
});

module.exports = router;