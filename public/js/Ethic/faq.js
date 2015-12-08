var UI = require('./UI.js');

// FAQ
module.exports = {
  init: function () {
    if (UI.$faq.length) {
      UI.$faq.find('.js-faq-item-link').on('click', function(e) {
        e.preventDefault();
        var $question = $(this).closest(UI.$faq),
            expandedOnes = UI.$faq.filter('.expanded');

        // open the right one
        $question.toggleClass('expanded');

        // close everything that we opened
        // only if we're opening an item
        if ($question.hasClass('expanded')) {
          expandedOnes.each(function () {
            $(this).closest(UI.$faq).toggleClass('expanded');
          });
        }
      });
    }
  }
};
