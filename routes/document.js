var express = require('express');
var router = express.Router();
var db = require('./db.js');

router.get('/:doc_type', (req, res) => {
    console.log(req.params.doc_type)

    db.getDocumentbyType(req.params.doc_type).then((data) => {
        res.send(data)
    }).catch((err) => {
        res.status(500).send(err)
    })

})

router.get('/', (req, res) => {

    db.getDocuments().then((data) => {
        res.send(data)
    }).catch((err) => {

        console.log(err);

        res.status(500).send(err)
    })

})

module.exports = router;