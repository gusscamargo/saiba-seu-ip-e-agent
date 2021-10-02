const express = require('express');
const router = express.Router();

/* GET home page. */
router.get("*", (req, res, next) => {
  res.render('index', { 
    title: 'Descobrir seu UserAgent e IP',
    userAgent: req.get("User-Agent"),
    userIp: req.ip
  });
});

module.exports = router;
