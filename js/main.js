(function(fn) {
	window.console = window.console || {log: fn, warn: fn, info: fn};
})(function() {});

(function ($, define, window, document, undefined) {

define([
	'Ethic/UI',
	'config',

	'libs/mejs/mediaelement-and-player',
	'libs/swfobject',
	'libs/parsley.min',
	'plugins/placeholders',
	
], function(UI, config) {

	$(function() {
		
		UI.init();

	});

});
})(jQuery, define, this, this.document);
