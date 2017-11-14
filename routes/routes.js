const express = require('express');
const router = express.Router();

//log time of requests
router.use(function(req, res, next) {
  console.log('time: ', Date.now());
  next();
});

//configure api routes
router.use(require('../api/users'));

router.get('/', function(req, res) {
  res.send('Why hello there');
});

module.exports = router;
