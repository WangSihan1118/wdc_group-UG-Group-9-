var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var accountsRouter = require('./routes/accounts');
var adminsRouter = require('./routes/admins');
var managersRouter = require('./routes/managers');

var mysql = require('mysql');

var app = express();
var dbConnectionPool = mysql.createPool({
 host: '127.0.0.1',
 database: 'covid'
});

app.use(function(req, res, next){
 req.pool = dbConnectionPool;
 next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ // //
 secret: 'a string of your choice',
 resave: false, 
 saveUninitialized: true, 
 cookie: { secure: false } 
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/accounts', usersRouter);
app.use('/admins', usersRouter);
app.use('/managers', usersRouter);

module.exports = app;
