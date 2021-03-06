const express = require('express');
const path = require('path');

const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

// ===================================================== 
// Route Requirements
//
const routes = require('./routes/index');
const users = require('./routes/users');
const posts = require('./routes/posts');



// ===================================================== 
// Express Middleware
//
const app = express();
app.set('view engine', 'hjs');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// =====================================================
// Setup Express Routing
//
app.set('views', path.join(__dirname, 'views'));
app.use('/', routes);
app.use('/users', users);
app.use('/post', posts);
app.use('/public/css/fonts', express.static(path.join(__dirname, 'fonts')));

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// =====================================================
// error handlers
//
if(app.get('env') === 'development') {
    // Will print stacktrace
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
} else {
    // production error handler
    // no stacktraces leaked to user
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });
}





module.exports = app;
