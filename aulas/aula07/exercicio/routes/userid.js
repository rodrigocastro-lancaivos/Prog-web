var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const userid = req.params.userid

  if (!userid) {
      return res.redirect('/users/signup')
  }

  res.render('index', { title: `Bem vindo ${userid}` });
});

module.exports = router;
