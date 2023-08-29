const express = require('express');
const router = express.Router();

const middleware = (req, res, next) => {
    console.log("This is a middleware");
    next();
}

router.get('/', middleware, (req, res) => {
    res.send("This is the homepage");
})

router.get('/signup_login', middleware, (req, res) => {
    res.send("This is the login/signup page");
})

module.exports = router;