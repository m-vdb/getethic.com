require('jquery');
require('swfobject');
require('placeholders');

// our components
require('./Ethic/scroll.js');
var UI = require('./Ethic/UI.js');
var nav = require('./Ethic/nav.js');
var faq = require('./Ethic/faq.js');
var click = require('./Ethic/click.js');

$("document").ready(function() {
  UI.init();
  nav.init();
  faq.init();
  click.init();
});
