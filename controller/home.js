var express = require('express');
var userModel= require.main.require('./model/userModel');
var router = express.Router();

router.get('*', function(req, res, next)
	{
		if(req.session.name!=null){
			next();
		}
		else{
			res.redirect('/login');
		}
});

router.get('/', (req,res)=>{
	var user ={
		name: req.session.name		
	};
	
	res.render('home/index', user);
});

router.get('/profile', (req, res)=>{

	userModel.get(req.session.uid, function(result){

		if(result.length > 0){
			res.render('home/profile', result[0]);
		}
		else{
			res.render('home/index');
		}
	});	
});

router.get('/edit/:id', (req, res)=>{
	//console.log("edit page"+"id");
	userModel.get(req.params.id, function(result){
		if(result.length >0 ){
			res.render('home/edit', result[0]);
		}else{ 
			res.redirect('/home/profile');
		}
	});
});

router.post('/edit/:id', (req, res)=>{
	
	var user ={
		id: req.params.id,
		uname : req.body.uname,
		password : req.body.password,
		//type : req.body.type
	};
	
	userModel.update(user, function(success){
		if(success){
			res.redirect('/home/profile');
		}else{
			res.render("/home/edit/"+req.params.id);
		}
	});
});

router.get('/tutionlist', (req, res)=>{
	
	userModel.getAll(function(results){	///getALL func from userModel will be called
		if(results.length > 0){
			
			var user = {
				name: req.session.name,
				tList: results
			};
			res.render('home/tutionlist', user);
		}
	});	
});

router.get('/search', (req,res)=>{
	// var user ={
	// 	name: req.session.name		
	// };
	
	res.render('home/search');
});

router.post('/search',(req,res)=>{
	
	var searchT={
		tname: req.body.search
		//password: req.body.password
	};

	userModel.getTution(searchT, function(results){
		if(results.length > 0){
			
			var user = {
				tList: results
			};
			res.render('home/searchedTution', user);
		}
		else{
			res.render('home/search');
		}
	});
});


module.exports= router;