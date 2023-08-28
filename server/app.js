const express = require('express');
const dotenv = require('dotenv');
const app = express();
dotenv.config({path: './config.env'});
const PORT = process.env.PORT;

require('./db/conn');

const middleware = (req, res, next) => {
    console.log("This is a middleware");
    next();
}

app.get('/', middleware, (req, res) => {
    res.send("Hello world!");
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})