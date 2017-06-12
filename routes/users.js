const express = require('express');
const router = express.Router();

const {useremailConf} = require('../routesMiddleware/userEmailConfirm_Middleware');
const {usersignIn} = require('../routesMiddleware/userSignIn_Middleware');


router.get('/confirmation/userconf/:randomstring', useremailConf);

router.post('/signIn/signInToYourAccount', usersignIn);

module.exports = router;
