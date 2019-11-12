var express = require('express');
var router = express.Router();
var db = require('./db.js');

router.get('/:id', (req, res) => {
    console.log(req.headers)
    console.log(req.params)

    db.getAppDetails("req.body").then((data) => {
        res.send(data)
    }).catch((err) => {
        res.status(500).send(err)
    })

})

router.post('/', (req, res) => {
    console.log(req.params)
    console.log(req.body)

    db.addAppDetails(req.body).then((data) => {
        res.send(data)
    }).catch((err) => {

        console.log(err);

        res.status(500).send(err)
    })

})

router.post('/uninstallApp', (req, res) => {
    console.log(req.params)
    console.log(req.body)

    db.deleteAppDetails(req.body).then((data) => {
        res.send(data)
    }).catch((err) => {

        console.log(err);

        res.status(500).send(err)
    })

})

module.exports = router;