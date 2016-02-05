window.$ = window.jQuery = require('jquery');
require('swfobject');
require('placeholders');

// our components
require('./Ethic/scroll.js');
var UI = require('./Ethic/UI.js');
var nav = require('./Ethic/nav.js');
var slider = require('./Ethic/slider.js');
var click = require('./Ethic/click.js');
var form = require('./Ethic/form.js');

$("document").ready(function() {
  UI.init();
  nav.init();
  slider.init();
  click.init();
  form.init();
});
