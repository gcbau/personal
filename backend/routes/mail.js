const Express = require('express');
const router = Express.Router();
const API_KEY = 'placeholder';
const DOMAIN = 'placeholder';
const mailgun = require('mailgun-js')({apiKey: API_KEY, domain: DOMAIN});

router.post('/', function(req, res, next) {
  const data = {
    from: `${req.body.name} <${req.body.email}>`,
    to: 'placeholder',
    subject: req.body.subject,
    text: req.body.body,
  };
  
  mailgun.messages().send(data, (error, body) => {
    if (error) {
      return res.status(error.statusCode).json({success: false});
    } else {
      return res.status(200).json({success: true});
    }
  });
});

module.exports = router;