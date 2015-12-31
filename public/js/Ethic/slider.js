var UI = require('./UI.js');

// Slider
module.exports = {
  init: function () {
    if (UI.$slider.length) {
      UI.$slider.find('.handle').on('click', function(e) {
        e.preventDefault();
        var $handle = $(this).closest(UI.$slider),
            activeOnes = UI.$slider.filter('.active');

        // open the right one
        $handle.toggleClass('active');

        // close everything that we opened
        // only if we're opening an item
        if ($handle.hasClass('active')) {
          activeOnes.each(function () {
            $(this).closest(UI.$slider).toggleClass('active');
          });
        }
      });
    }
  }
};
