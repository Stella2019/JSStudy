var express = require('express');
var app = express();

var mongoose = require("mongoose");
var path = require("path");

var indexRouter = require("./routes/index.js");
var restRouter = require("./routes/rest.js");
var restRouter2 = require("./routes/test_get_create.js");


// mongoose.connect("mongodb://user:user@ds129030.mlab.com:29030/coj-song");

mongoose.connect("mongodb://127.0.0.1:27017/clmic_db", { useNewUrlParser: true });


app.use(express.static(path.join(__dirname, '../public')));

app.use("/api/v1", restRouter);
app.use("/", indexRouter);
app.use("/api/v2", restRouter2);


//handle all other url requests
app.use(function (req, res) {
    //send index.html to start client side
    res.sendFile("index.html", {root: path.join(__dirname, '../public/')});
});


app.listen(3000, function () {
    console.log('App listening on port 3000!')
});




