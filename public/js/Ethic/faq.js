var UI = require('./UI.js');

// FAQ
module.exports = {
  init: function () {
    if (UI.$faq.length) {
      UI.$faq.find('.js-faq-item-link').on('click', function(e) {
        e.preventDefault();
        var expandedOnes = UI.$faq.filter('.expanded');

        // open the right one
        $(this).closest(UI.$faq).toggleClass('expanded');

        // close everything that we opened
        expandedOnes.each(function () {
          $(this).closest(UI.$faq).toggleClass('expanded');
        });
      });
    }
  }
};
