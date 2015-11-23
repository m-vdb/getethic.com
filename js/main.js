(function(fn) {
	window.console = window.console || {log: fn, warn: fn, info: fn};
})(function() {});

(function ($, define, window, document, undefined) {

define([
	'Ethic/UI',
	'config',

	'libs/mejs/mediaelement-and-player',
	'libs/swfobject/swfobject/swfobject',
	'libs/parsleyjs/dist/parsley.min',
	'libs/scrollreveal/dist/scrollReveal.min',
	'plugins/placeholders',
	
], function(UI, config) {

	$(function() {
		
		UI.init();
		
		// Scroll Reveal
		var config = {
			mobile: false
		};
		window.sr = new scrollReveal( config );
		
		// Add class
		var bgscroll = function () {
			var $sd = UI.$scroll;

					if (Modernizr.mq('only screen and (min-width: 800px)')) {
						var $scroll = UI.$scroll;

						if (UI.$window.scrollTop() > 558) {
					$scroll.addClass('bgscroll');

						} else {
						 
					$scroll.removeClass('bgscroll');
						}
				}

			};
			UI.onscroll(bgscroll);
		
			// Init parsley
			$('.form').parsley();

	});

});
})(jQuery, define, this, this.document);
