var userModel = require('../models/User'),
	flash = require('express-flash');

var userController = {
	users: function(req, res, next){
		if(req.session.loggedin !== true){
			res.redirect('/');
		}
		else{
			res.render('users', {title: 'User list'});
		}
	},
	getAll: function(req, res, next){
		if(req.session.loggedin === true){
			userModel.find(function(err, data){
				res.json(data);
			});
		}
		else{
			res.redirect('/');
		}
	},
	getOne: function(req, res, next){
		if(req.session.loggedin === true){
			var username = req.params.username;
			userModel.findOne({username: username}, function(err, data){
				res.json(data);
			});
		}
		else{
			res.redirect('/');
		}
	},
	login: function(req, res, next){
		var username = req.body.username,
			password = req.body.password;
		userModel.findOne({username: username, password: password}, function(err, data){
			if(data){
				req.session.loggedin = true;
				res.redirect('/users');
			}
			else{
				req.flash('info', 'Wrong username or password');
				res.redirect('/');
			}
		});
	},
	logout: function(req, res, next){
		delete req.session.loggedin;
		req.flash('info', 'You have been logged out');
		res.redirect('/');
	}
};

module.exports = userController;
