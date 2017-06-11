var express = require("express");


var router = express.Router();
module.exports = router;

//TODO: Remove after Db integration
var user={
  "userId": "U123",
  "userName": "Jack Jones",
  "accountNo": "121101",
  "branch": "Tokyo",
  "type": "Savings",
  "balance": "100100"
 };

router.get("/userInfo/:userId", (req, res) => {
    var userId = req.params.userId;
    res.json(user);
    res.sendStatus(200);
});