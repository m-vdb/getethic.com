var config = require('config'),
    swig = require('swig'),
    mailcomposer = require('mailcomposer'),
    mailgun = require('mailgun-js')({
      apiKey: config.get('mailgun.api_key'),
      domain: config.get('mailgun.domain')
    }),
    juice = require('juice');


module.exports.sendFromTemplate = function (from, to, subject, tpl, context, cb) {
  context = context || {};
  context.baseDomain = config.get('baseDomain');
  var html = swig.renderFile(tpl, context),
      mail = mailcomposer({
        from: from,
        to: to,
        subject: subject,
        html: juice(html)  // inline CSS
      });

  mail.build(function(err, message) {
    if (err) return cb(err);

    mailgun.messages().sendMime({
      to: to,
      message: message.toString('ascii')
    }, cb);
  });
};
