const express = require('express');
const router = express.Router();

const middleware = (req, res, next) => {
    console.log("This is a middleware");
    next();
}

router.get('/', middleware, (req, res) => {
    res.send("This is the homepage");
})

module.exports = router;