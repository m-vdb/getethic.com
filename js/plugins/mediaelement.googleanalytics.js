/*
* Google Analytics Plugin
* Requires
*
*/

(function($) {
	$.fn.mediaelementgoogleanalytics = function() {
		$.extend(mejs.MepDefaults, {
			googleAnalyticsTitle: '',
			googleAnalyticsCategory: 'Videos',
			googleAnalyticsEventPlay: 'Play',
			googleAnalyticsEventPause: 'Pause',
			googleAnalyticsEventEnded: 'Ended',
			googleAnalyticsEventPlayed: 'Seconds Played',
			googleAnalyticsEventPercentagePlayed: 'Percentage Played'
		});


		$.extend(MediaElementPlayer.prototype, {
			buildgoogleanalytics: function(player, controls, layers, media) {

				media.addEventListener('play', function() {

					if (typeof _gaq != 'undefined') {
						_gaq.push(['_trackEvent',
							player.options.googleAnalyticsCategory,
							player.options.googleAnalyticsEventPlay,
							(player.options.googleAnalyticsTitle === '') ? media.currentSrc : player.options.googleAnalyticsTitle
						]);
					}
				}, false);

				media.addEventListener('pause', function() {

					if (typeof _gaq != 'undefined') {
						_gaq.push(['_trackEvent',
							player.options.googleAnalyticsCategory,
							player.options.googleAnalyticsEventPause,
							(player.options.googleAnalyticsTitle === '') ? media.currentSrc : player.options.googleAnalyticsTitle
						]);
					}
				}, false);

				media.addEventListener('ended', function() {
					if (typeof _gaq != 'undefined') {
						_gaq.push(['_trackEvent',
							player.options.googleAnalyticsCategory,
							player.options.googleAnalyticsEventEnded,
							(player.options.googleAnalyticsTitle === '') ? media.currentSrc : player.options.googleAnalyticsTitle
						]);
					}
				}, false);
				
				window.onbeforeunload = function() {
					if (typeof _gaq != 'undefined' && media.currentTime > 0) {
						_gaq.push(['_trackEvent',
							player.options.googleAnalyticsCategory,
							player.options.googleAnalyticsEventPlayed,
							(player.options.googleAnalyticsTitle === '') ? media.currentSrc : player.options.googleAnalyticsTitle,
							Math.round(media.currentTime)
						]);

						_gaq.push(['_trackEvent',
							player.options.googleAnalyticsCategory,
							player.options.googleAnalyticsEventPercentagePlayed,
							(player.options.googleAnalyticsTitle === '') ? media.currentSrc : player.options.googleAnalyticsTitle,
							Math.round(media.currentTime / media.duration * 100)
						]);
					}
				};
			}
		});
	};
})(jQuery);