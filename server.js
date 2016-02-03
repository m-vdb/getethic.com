var express = require('express'),
    form = require('express-form'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    csrf = require('csurf'),
    mongoose = require('mongoose'),
    config = require('config'),
    swig = require('swig');

var BetaUser = require('./models/beta-user.js');

const PORT = 8080;

var app = express();
var csrfProtection = csrf({cookie: true});

// configuration
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.set('view cache', false);
if (process.env.NODE_ENV !== 'production') {
  swig.setDefaults({cache: false});
}
app.engine('html', swig.renderFile);
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

// serve static files
app.use(express.static('public'));
// custom template tag
swig.setTag('static', function (str, line, parser, types, options) {
  var matched;  // only one token
  parser.on("*", function (token) {
    if (!matched &&
        (token.type === types.STRING)
      ) {
      this.out.push(token.match.substring(1, token.length - 1));  // remove the ""
      this.out.push('?v=' + config.get('cache_version'));
      matched = true;
      return;
    }
    throw new Error('Unexpected token "' + token.match + '" in static tag');
  });
  return true;
}, function (compiler, args, content, parents, options, blockName) {
  return '_output += "'+ args.join('') + '";';
});

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
    gtmId: config.get('google_tag_manager_id'),
    cacheVersion: config.get('cache_version')
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
