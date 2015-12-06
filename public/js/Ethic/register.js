require('../plugins/jquery-ui.effects');

module.exports = {

  init: function () {
    $('a[href=#register]').click(function (e) {
      e.preventDefault();
      e.stopPropagation();
      window.requestAnimationFrame(function () {
        $('html, body').animate({
          scrollTop: $('#register').offset().top
        }, {
          easing: 'easeInOutCubic',
          duration: 2500
        });
      });
    });
  }
};
