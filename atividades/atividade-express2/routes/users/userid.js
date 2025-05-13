var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:userid', function(req, res, next) {
  res.send(`Bem vindo a página, ${req.params.userid}`);
});

module.exports = router;
