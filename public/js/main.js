require('jquery');
require('swfobject');
require('placeholders');

// our components
require('./Ethic/scroll.js');
var UI = require('./Ethic/UI.js');
var nav = require('./Ethic/nav.js');
var register = require('./Ethic/register.js');
var slider = require('./Ethic/slider.js');
var click = require('./Ethic/click.js');

UI.init();
nav.init();
register.init();
slider.init();
click.init();
