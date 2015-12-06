var express = require('express');
const PORT = 8080;

var app = express();

// configure view folders
app.set('views', './views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

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


app.listen(PORT, '0.0.0.0', function () {
  console.log("Server listening on: http://localhost:%s", PORT);
});
