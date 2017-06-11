var express = require("express");
var app = express();

var bodyParser = require("body-parser");

app.use(bodyParser.json());

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


var loginRouter = require("./login");
app.use("/login", loginRouter);

var userRouter = require("./manageUser");
app.use("/user", userRouter);

var ministatementRouter = require("./ministatement");
app.use("/ministatement", ministatementRouter);

var fundTransferRouter = require("./fundtransfer");
app.use("/fundtransfer", fundTransferRouter);

app.listen(3000, function () {
    console.log('Server listening on port 3000!');
});