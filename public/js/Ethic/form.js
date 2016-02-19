var toastr = require('toastr');

module.exports = {
  init: function () {
    if (window.location.hash === "#error-dup") {
      // we already have the email
      toastr.info("Stay tuned!", "We already have your email", {
        positionClass: "toast-ethic"
      });
    }
    else if (window.location.hash === "#error-validation") {
      // form didn't validate
      toastr.error(
        "We apologize for the inconvenience, please try again later.",
        "We couldn't save your email", {
          positionClass: "toast-ethic"
        }
      );
    }
  }
};
