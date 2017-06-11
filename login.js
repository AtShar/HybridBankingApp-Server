var express = require("express");


var router = express.Router();
module.exports = router;

router.post("/user", (req, res) => {
    var loginId = req.body.loginId;
    var password = req.body.password;
    if (loginId !== "user123" || password !== "pass123") {
        res.sendStatus(401);
    }
    res.sendStatus(200);
    
});