var express = require('express'),
    form = require('express-form'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    csrf = require('csurf'),
    mongoose = require('mongoose'),
    config = require('config');

var BetaUser = require('./models/beta-user.js');

const PORT = 8080;

var app = express();
var csrfProtection = csrf({cookie: true});

// configuration
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', require('swig').renderFile);
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

// serve static files
app.use(express.static('public'));

// template context
app.use(function (req, res, next) {
  res.locals.path = req.path;
  next();
});

// routes
app.get('/', csrfProtection, function (req, res) {
  res.render('index', {
    csrfToken: req.csrfToken(),
    zopimId: config.get('zopim_id'),
    heapId: config.get('heap_id'),
    gtmId: config.get('google_tag_manager_id')
  });
});
app.get('/faq', csrfProtection, function (req, res) {
  res.render('faq.html', {
    csrfToken: req.csrfToken(),
    heapId: config.get('heap_id'),
    gtmId: config.get('google_tag_manager_id'),
    contact: config.get('contact')
  });
});
app.get('/how-it-works', csrfProtection, function (req, res) {
  res.render('how-it-works.html', {
    csrfToken: req.csrfToken(),
    heapId: config.get('heap_id'),
    gtmId: config.get('google_tag_manager_id')
  });
});
app.get('/thanks', function (req, res) {
  res.render('thanks.html', {
    heapId: config.get('heap_id'),
    gtmId: config.get('google_tag_manager_id')
  });
});
app.post(
  '/register-beta',
  // parse the form and validate
  form(form.field("email").trim().isEmail()),
  // CSRF protection
  csrfProtection,
  // handler
  function (req, res) {
  if (!req.form.isValid) {
    res.redirect('/#error');
  } else {
    var user = new BetaUser(req.form);
    user.save(function (err) {
      res.redirect(err ? '/#error' : '/thanks');
    });
  }
});

// start services
if (config.get('mongo.uri')) {
  mongoose.connect(config.get('mongo.uri'), config.get('mongo.options'));
}
app.listen(PORT, '0.0.0.0', function () {
  console.log("Server listening on: http://localhost:%s", PORT);
});
