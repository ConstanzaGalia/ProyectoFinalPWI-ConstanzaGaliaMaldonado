const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  user = req.session.name;
  res.render('index', { title: 'Entrenamiento STP', user });
});

module.exports = router;
