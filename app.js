var express 		= require('express');
var bodyParser 		= require('body-parser');
var exSession 		= require('express-session');
var cookieParser 	= require('cookie-parser');
var login 			= require('./controller/login');
var registration 	= require('./controller/registration');
var home 			= require('./controller/home');
var logout 			= require('./controller/logout');
var app 			= express();
var port 			= 3000;

app.set('view engine','ejs');

app.use(exSession({secret:'top secret code', saveUninitialized: true, resave: false}));

app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());

app.use('/login',login);
app.use('/registration',registration);
app.use('/home',home);
app.use('/logout',logout);

 
