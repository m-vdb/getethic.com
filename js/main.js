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

	});

});
})(jQuery, define, this, this.document);
