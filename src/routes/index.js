const router = require('express').Router()

const indexController = require("../controllers/indexController")

/* GET home page. */
router.get("*", indexController.index)

module.exports = router
