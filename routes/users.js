var express = require('express');
var router = express.Router();
var db = require('./db.js');
var jwt = require('jsonwebtoken');

/* Authenticate Users. */
router.post('/login', function (req, res, next) {
  console.log(req.body)
  var token = jwt.sign({
    foo: 'bar'
  }, 'shhhhh');
  // res.send({'data': 'data'})
  db.Login(req.body).then((data) => {
    data.token = token;
    console.log(data)

    // res.header("x-auth-token", token)
    // res.setHeader('Token', token)
    console.log(res)
    res.send(data)
  }).catch((err) => {
    res.status(500).send(err)
  })
});

/* Register Users. */
router.post('/register', function (req, res, next) {
  db.Register(req.body).then((data) => {
    res.send(data)
  }).catch((err) => {
    console.log(err)
    res.status(500).send(err)
  })
});

module.exports = router;
