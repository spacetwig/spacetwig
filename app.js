const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const {mongoose} = require('./db/mongoose');
const passport = require('passport');
const session = require('express-session');
const cloudinary = require('cloudinary');
const multer = require('multer');
const flash = require('connect-flash');
const {Strategy} = require('passport-facebook');
const expressValidator = require('express-validator');
const MongoStore = require('connect-mongo')(session);

require('dotenv').config();

const {signUpMidware} = require('./routesMiddleware/signUp_Middleware');

mongoose.Promise = global.Promise;

const db = mongoose.connection;


const index = require('./routes/index');
const users = require('./routes/users');

const app = express();

cloudinary.config({
  cloud_name: process.env.cloudinary_Cloud_Name,
  api_key: process.env.cloudinary_Api_Key,
  api_secret: process.env.cloudinary_Api_Secret
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const sessionOptions = {
  secret: 'this is a not so secret secret',
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({
    mongooseConnection: db
  })
};

app.use(session(sessionOptions));
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});


app.use(expressValidator({
  errorFormatter: (param, msg, value) => {
      let namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

app.use('/', index);
app.use('/users', users);

const upload = multer({ dest: './public/images/'});
//photoUpload routes
app.post('/signupnewuser', upload.single('file'), signUpMidware);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
