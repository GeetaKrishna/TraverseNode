var express = require('express');
var router = express.Router();
var db = require('./db.js');

router.get('/', (req, res) => {
    console.log(req.params)

    db.getMedicationDetails().then((data) => {
        res.send(data.recordset)
    }).catch((err) => {
        res.status(500).send(err)
    })

})

module.exports = router;