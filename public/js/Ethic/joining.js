var HEADER_OFFSET = 100;


module.exports = {
  init: function () {
    var $register = $('#register'),
        $subscriber = $('#subscriber');
    $('.js-im-interested').click(function (e) {
      e.preventDefault();

      window.requestAnimationFrame(function () {
        $('html, body').animate({
          scrollTop: $register.offset().top - HEADER_OFFSET
        }, 500, 'linear', function () {
          $subscriber.focus();
        });
      });
    });
  }
};
