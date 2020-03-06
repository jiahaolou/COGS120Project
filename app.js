
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var meal = require('./routes/meal');
var weightlossmeal = require('./routes/weightlossmeal');
var diy1meal = require('./routes/diy1meal');

var landing = require('./routes/landing');
var favorite = require('./routes/favorite');
var diy = require('./routes/diy');
var diyAlt = require('./routes/diyAlt');
var diy1 = require('./routes/diy1');

//var login = require('./routes/login');
var workout = require('./routes/workout');
var weightloss = require('./routes/weightloss');

// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


app.get('/index', index.view);
app.get('/meal/:id', meal.mealInfo);
app.get('/weightlossmeal/:id', weightlossmeal.weightlossmealInfo);
app.get('/diy1meal/:id', diy1meal.diy1mealInfo);
app.get('/', landing.view);
app.get('/favorite', favorite.view);
app.get('/diy', diy.view);
app.get('/diyAlt', diy.viewAlt);
app.get('/diy1', diy1.view);

//app.get('/login', login.view)
app.get('/workout', workout.view)

app.get('/weightloss', weightloss.view)
// Example route
// app.get('/users', user.list);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
