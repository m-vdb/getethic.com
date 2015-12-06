var express = require('express'),
    form = require('express-form'),
    bodyParser = require('body-parser'),
    field = form.field;

const PORT = 8080;

var app = express();

// configuration
app.set('views', './views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.urlencoded({extended: false}));

// serve static files
app.use(express.static('public'));

// routes
app.get('/', function (req, res) {
  res.render('index.html');
});
app.get('/faq', function (req, res) {
  res.render('faq.html');
});
app.get('/how-to-get-started', function (req, res) {
  res.render('how-to-get-started.html');
});
app.get('/thanks', function (req, res) {
  res.render('thanks.html');
});
app.post(
  '/register-beta',
  form(field("email").trim().isEmail()),
  function (req, res) {
  if (!req.form.isValid) {
    res.redirect('/#error');
  } else {
    console.log("Email:", req.form.email);
    // TODO save in database
    res.redirect('/thanks');
  }
});

app.listen(PORT, '0.0.0.0', function () {
  console.log("Server listening on: http://localhost:%s", PORT);
});
