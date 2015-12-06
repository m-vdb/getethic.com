require('jquery');
require('swfobject');
require('placeholders');
require('./plugins/jquery-ui.effects');
var scrollReveal = require('scrollreveal');

var UI = require('./Ethic/UI.js');
		
UI.init();

// Scroll Reveal
window.sr = new scrollReveal({
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

// Nav visible
var closeHandler = function(e) {
	if(UI.$body.hasClass('visible')) {
		e.preventDefault();
		UI.$body.removeClass('visible');

		$('.overlay').off('click', closeHandler);
	}
};

if (UI.$nav.length) { 
	UI.$nav.on('click', function(e) {
		e.preventDefault();

		if(!UI.$body.hasClass('visible')) { 
			e.stopPropagation();
		}
		
		UI.$body.toggleClass('visible');

		$('.overlay').on('click', closeHandler);
	});
}

// FAQ
if (UI.$faq.length) {
  UI.$faq.find('span').on('click', function(e) {
    e.preventDefault();
    $(this).closest(UI.$faq).toggleClass('expanded');
  });
}
