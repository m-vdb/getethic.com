var UI = require('./UI.js');

// FAQ
module.exports = {
  init: function () {
    if (UI.$faq.length) {
      UI.$faq.find('span').on('click', function(e) {
        e.preventDefault();
        $(this).closest(UI.$faq).toggleClass('expanded');
      });
    }
  }
};
