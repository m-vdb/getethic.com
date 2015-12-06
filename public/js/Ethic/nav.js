var UI = require('./UI.js');

// Nav visible
var closeHandler = function(e) {
  if(UI.$body.hasClass('visible')) {
    e.preventDefault();
    UI.$body.removeClass('visible');

    $('.overlay').off('click', closeHandler);
  }
};

module.exports = {
  init: function () {
    if (UI.$nav.length) { 
      UI.$nav.on('click', function(e) {
        e.preventDefault();

        if(!UI.$body.hasClass('visible')) { 
          e.stopPropagation();
        }

        UI.$body.toggleClass('visible');

        $('.overlay').on('click', closeHandler);
      });
    }
  }
};
