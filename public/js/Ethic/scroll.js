var scrollReveal = require('scrollreveal');

var UI = require('./UI.js');

// Scroll Reveal
window.sr = window.sr || new scrollReveal({
  mobile: false,
});

// Add class scroll
var sticky = function () {
  var $sticky = UI.$page;
    
  if (UI.$window.scrollTop() > 450) {
    $sticky.addClass('sticky');
  } else {
    $sticky.removeClass('sticky');
  }
    
  if (Modernizr.mq('only screen and (min-width: 800px)')) {

    if (UI.$window.scrollTop() > 300) {
      $sticky.addClass('sticky');
    } else {
      $sticky.removeClass('sticky');
    }
  }

};
UI.onscroll(sticky);
