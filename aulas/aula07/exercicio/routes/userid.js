var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  const userid = req.params.userid

  console.log(`Userid ${userid}`)

  res.render('index', { title: `Bem vindo ${userid}` });
});

module.exports = router;
