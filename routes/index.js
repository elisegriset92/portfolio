const express = require ('express');
const router = express.Router ();

/* GET home page */
router.get ('/', (req, res, next) => {
  res.render ('index');
});

router.get('/resume', (req, res, next)=> {
  res.render ('resume')
})
module.exports = router;
