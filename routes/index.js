const express = require ('express');
const router = express.Router ();

/* GET home page */
router.get ('/', (req, res, next) => {
  res.render ('index');
});

router.get ('/resume', (req, res, next) => {
  res.render ('resume');
});

router.get ('/about-snake', (req, res, next) => {
  res.render ('about-snake');
});
module.exports = router;
