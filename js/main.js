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
		
		// Init parsley
		$('.form').parsley();
		
		// Scroll Reveal
		var config = {
			mobile: false
		};
		window.sr = new scrollReveal( config );
		
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
		
		if(UI.$nav.length) { 
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
      if ( UI.$faq.length ) {
        UI.$faq.find ( 'span' ).on ( 'click', function( e ) {
            e.preventDefault ();
            $ ( this ).closest ( UI.$faq ).toggleClass ( 'expanded' );
        } );
      }

	});

});
})(jQuery, define, this, this.document);
