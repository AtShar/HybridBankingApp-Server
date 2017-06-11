var express = require("express");


var router = express.Router();
module.exports = router;
//TODO: Remove after Db integration
var txns = [
    {
        "txnId": "T121",
        "type": "Withdrawl",
        "date": "23-02-2017",
        "amount": "2000"
    },
    {
        "txnId": "T122",
        "type": "Deposit",
        "date": "20-01-2017",
        "amount": "5000"
    },
    {
        "txnId": "T123",
        "type": "Transfer",
        "date": "24-03-2017",
        "amount": "7000"
    }

];

router.get("/:userId", (req, res) => {
    var userId = req.params.userId;
    res.json(txns);
    res.sendStatus(200);
});

