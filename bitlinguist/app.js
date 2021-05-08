var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const PORT = process.env.PORT || 3000;


var lenguajesRouter = require('./routes/lenguajes');
var usersRouter = require('./routes/users');

var app = express();
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'))
}
);


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api/v1/lenguaje', lenguajesRouter);
app.use('/api/v1/user', usersRouter);

module.exports = app;
