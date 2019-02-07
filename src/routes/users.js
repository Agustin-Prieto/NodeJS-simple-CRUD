const router = require('express').Router();

router.get('/users/signin', (req,res) => {
  res.send('ingresando');
});

router.get('/users/signup', (req,res) => {
  res.send('registro');
});

module.exports = router;