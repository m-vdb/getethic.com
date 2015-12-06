var scrollReveal = require('scrollreveal');

var UI = require('./UI.js');

// Scroll Reveal
window.sr = window.sr || new scrollReveal({
  mobile: false
});

// Add class scroll
var bgscroll = function () {
  var $sd = UI.$nav;
    
  if (UI.$window.scrollTop() > 450) {
    $sd.addClass('bgscroll');
  } else {
    $sd.removeClass('bgscroll');
  }
    
  if (Modernizr.mq('only screen and (min-width: 800px)')) {

    if (UI.$window.scrollTop() > 558) {
      $sd.addClass('bgscroll');
    } else {
      $sd.removeClass('bgscroll');
    }
  }

};
UI.onscroll(bgscroll);
