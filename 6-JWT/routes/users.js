const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  console.log(req.decode);
  res.send('respond with a resource');
});

module.exports = router;
