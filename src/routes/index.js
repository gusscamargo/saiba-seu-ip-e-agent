const router = require('express').Router()

const indexController = require("../controllers/indexController")

/* GET home page. */
// Como deveria ser:
// router.get("*", indexController.index)

// Por algum motivo ta tendo bug na relação route-controller, bug que não ta faezendo sentido
router.get("*", (req, res, next) => {
  res.render('index', { 
    title: 'Descobrir seu UserAgent e IP',
    userAgent: req.get("User-Agent"),
    userIp: req.ip
  });
})

module.exports = router
