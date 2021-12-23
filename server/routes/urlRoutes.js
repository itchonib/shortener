const router = require("express").Router(),
  { shortenUrl, findUrl } = require('../controllers/urlcontrollers')

//**********************
// URL ROUTES
//**********************

router.post("/api/url", shortenUrl)
router.get("/:id", findUrl);

module.exports = router;
