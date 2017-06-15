const express = require('express');
const router = express.Router();
const {addProperty} = require('../routesMiddleware/addProperty_Middleware');

router.get('/test', (req, res, next) => {
  res.render('addRoom');
});

module.exports = router;
