
var onscrollCallbacks = [],
	onresizeCallbacks = [],
	didScroll = false,
	didResize = false;


var UI = {
	init: function() {

		// Caching but nothing too specific here
		UI.$window =				$(window);
		UI.$body =					$(document.body);
		UI.$htmlBody = 			$(document.documentElement).add(document.body);
		UI.$form = 					$('form');
		UI.$fields = 				$('input, textarea');
		UI.$medias = 				$('video, audio');
		UI.$video = 				$('video');
		UI.$nav = 					$('.menu');
		UI.$page = 					$('.page');
		UI.$slider = 				$('.claims');
		UI.$faq = 					$('.question');


		// Better scroll & resize events
		UI.$window
			.scroll(function() {	didScroll = true;	})
			.resize(function() {	didResize = true;	});

		setInterval(function() {
			if(didScroll) {
				didScroll = false;
				UI.scroll();
			}
			if(didResize) {
				didResize = false;
				UI.resize();
			}
		}, 250);

		// inputs focus/blur handlers
		$('input[type="email"]').focus(function () {
			$(this).addClass('input--filled');
		});
		$('input[type="email"]').blur(function () {
			var $this = $(this);
			if ($this.val().trim() === '') {
				$this.removeClass('input--filled');
			}
		});

	},
	onscroll: function(callback) {
		onscrollCallbacks.push(callback);
		return UI;
	},
	onresize: function(callback) {
		onresizeCallbacks.push(callback);
		return UI;
	},
	scroll: function() {

		for(var i = 0, l = onscrollCallbacks.length; i < l; i++) {
			onscrollCallbacks[i]();
		}
	},
	resize: function() {
		for(var i = 0, l = onscrollCallbacks.length; i < l; i++) {
			onscrollCallbacks[i]();
		}
	}
};


module.exports = UI;
