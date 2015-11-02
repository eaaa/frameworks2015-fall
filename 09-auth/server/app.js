var express 		= require('express'),
	path 			= require('path'),
	port			= 3000,
	session			= require('express-session'),
	MongoStore		= require('connect-mongo')(session),
	bodyParser 		= require('body-parser'),
	flash			= require('express-flash'),
	mongoose 		= require('mongoose'),
	databaseServer 	= 'mongodb://localhost/',
	databaseName 	= 'auth';

var app = express();
mongoose.connect(databaseServer + databaseName);

var controllers = './controllers/';
var appController = require(controllers);
var userController = require(controllers + 'user');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(flash());

app.use(session(
	{
		resave: false,
		store: new MongoStore({ url: databaseServer + databaseName }),
		secret: 'saltmine',
		saveUninitialized: true,
		cookie: { secure: false, maxAge: 60 * 60 * 1000 }
	}
));

app.use(express.static(path.join(__dirname, '../client/')));

var router 	= express.Router();
router.get('/', appController.index);
router.post('/login', userController.login);
router.get('/logout', userController.logout);
router.get('/users', userController.users);
router.get('/api/users', userController.getAll);
router.get('/api/user/:username', userController.getOne);
app.use('/', router);

var db = mongoose.connection;
db.on('error', function(err){
	console.error('No connection');
});
db.once('open', function(callback){
	console.log("MongoDB connection established");
	
});

app.listen(port, function(){
	console.log('Listening on port + ' + port);
});