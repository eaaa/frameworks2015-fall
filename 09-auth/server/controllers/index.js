var appModule = {
	index: function(req, res, next){
		if(req.session.loggedin === true){
			res.redirect('/users');
		}
		res.render('index', {title: 'Node.js Authorization App'});
	}
};

module.exports = appModule;
