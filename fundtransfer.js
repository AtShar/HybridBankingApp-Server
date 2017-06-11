var express = require("express");


var router = express.Router();
module.exports = router;

router.post("/performTransfer", (req, res) => {
    var fromAccount = req.body.fromAccount;
    var toAccount = req.body.toAccount;
    console.log(fromAccount);
    console.log(toAccount);
    res.sendStatus(200);
}); 