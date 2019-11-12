var express = require('express');
var router = express.Router();
let jwt = require('jsonwebtoken');

function checkToken (req, res, next) {
  let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
  if (token.startsWith('Bearer ')) {
    // Remove Bearer from string
    token = token.slice(7, token.length);
  }

  if (token) {
    jwt.verify(token, 'shhhhh', (err, decoded) => {
      if (err) {
          console.log(err, "err during verifying");
          
        return res.json({
          success: false,
          message: 'Token is not valid'
        });
      } else {
        console.log(decoded, "token decoded")
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.json({
      success: false,
      message: 'Auth token is not supplied'
    });
  }
};

module.exports = router;
module.exports.checkToken = checkToken;