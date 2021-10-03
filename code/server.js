require("dotenv").config();

const express = require("express");
var bodyParser = require('body-parser');


const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// var routes = require('./router/router');

// app.use('/', routes);


// const jobs = require("./router/router")


app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("kurcina"));

// app.use("/api/jobs", jobs);


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});

module.exports = app;
