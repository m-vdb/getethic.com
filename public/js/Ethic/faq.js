var UI = require('./UI.js');

var HEADER_OFFSET = 100;

// FAQ
module.exports = {
  init: function () {
    if (UI.$faq.length) {
      // clicks will expand the different sections
      UI.$faq.find('.js-faq-item-link').on('click', function(e) {
        e.preventDefault();
        onFAQClick($(this).closest(UI.$faq));
      });

      // tweak hash to scroll manually
      onHashChange(null, function ($el) {
        // and expand when done
        onFAQClick($el);
      });
      $(document).on("hashchange", onHashChange);
    }
  }
};


function onFAQClick ($question) {
  var expandedOnes = UI.$faq.filter('.expanded');

  // open the right one
  $question.toggleClass('expanded');

  // close everything that we opened
  // only if we're opening an item
  if ($question.hasClass('expanded')) {
    expandedOnes.each(function () {
      $(this).closest(UI.$faq).toggleClass('expanded');
    });
  }
}

function onHashChange (e, cb) {
  var $el, hash = location.hash.replace('#','');
  if (hash != '') {  // this is crucial, otherwise it loops
    $el = UI.$faq.filter("#" + hash);
    location.hash = '';

    // scroll to the desired location
    var scrollWasDone = false;
    $('html, body')  // useful for compat
      .animate({
        scrollTop: $el.offset().top - HEADER_OFFSET
      }, 100, "linear", function () {
        // the callback is fired twice,
        // once for html, once for body,
        // we don't want to repeat it
        if (cb && !scrollWasDone) {
          cb($el);
          scrollWasDone = true;
        }
      });
  }
}
