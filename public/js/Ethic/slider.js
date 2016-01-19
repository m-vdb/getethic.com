var UI = require('./UI.js');

// Slider
module.exports = {
  init: function () {
    if (UI.$claimsSlider.length) {
      UI.$claimsSlider.find('.slider').click(function(e) {
        e.preventDefault();
        UI.$claimsSlider.toggleClass('active');
      });
    }
  }
};
