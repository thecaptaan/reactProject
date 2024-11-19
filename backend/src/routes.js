const router = require('express').Router();
const authentication = require('./functions/auth');
const authenticate = require('./utils/authenticate');

router.post("/auth/signup", authentication.createUserAccount);
router.post("/auth/login", authentication.loginUserAccount);
router.post("/auth/change/password", authenticate, authentication.loginUserAccount);

module.exports = router;