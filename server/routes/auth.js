const express = require('express');
const router = express.Router();

const middleware = (req, res, next) => {
    console.log("This is a middleware");
    next();
}

router.get('/', middleware, (req, res) => {
    res.send("This is the homepage");
})

router.get('/home', middleware, (req, res) => {
    res.send("This is the about page");
})

router.get('/signup_login', middleware, (req, res) => {
    res.send("This is the login/signup page");
})

router.get('/contact', middleware, (req, res) => {
    res.send("This is the contact page");
})

router.get('/about', middleware, (req, res) => {
    res.send("This is the about page");
})


module.exports = router;