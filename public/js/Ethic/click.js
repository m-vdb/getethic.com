var attachFastClick = require('fastclick');

// Fastclick
module.exports = {
  init: function () {
    $(function() {
      attachFastClick(document.body);
    });
  }
};
