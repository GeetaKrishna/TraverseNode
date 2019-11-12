var express = require('express');
var router = express.Router();

const sql = require('mssql')

const config = {
    user: 'TestDB_USER',
    password: 'user',
    server: '172.17.0.141', // You can use 'localhost\\instance' to connect to named instance
    database: 'TEST_DB',
    options: {
        encrypt: true // Use this if you're on Windows Azure
    }
}

const Connection = sql.connect(config)

sql.on('error', err => {
    // ... error handler
    console.log(err, 'error on connect')
})

function Login(query) {

    return new Promise((resolve, reject) => {
        Connection.then(() => {
                return sql.query `SELECT * FROM USERS WHERE USER_NAME = ${query.USER_NAME} AND PASSWORD = ${query.PASSWORD}`;
            }).then((result) => {
                resolve(result);
            })
            .catch((err) => {
                reject(err)
            })
    })

}

function Register(query) {
    return new Promise((resolve, reject) => {

        Connection.then(() => {
                // Query
                return sql
                    .query `INSERT INTO [TestDB].[dbo].[USERS] (
                            FIRST_NAME,
                            LAST_NAME,
                            PASSWORD,
                            USER_ID,
                            USER_NAME,
                            ROLES
                        )
                        VALUES
                        (
                            ${query.USER_DETAILS},
                            ${query.LAST_NAME},
                            ${query.PASSWORD},
                            ${query.USER_ID},
                            ${query.FIRST_NAME},
                            ${query.ROLE}
                        )`
            })
            .then(result => {
                resolve(result)
            })
            .catch((err) => {
                reject(err);
            })
    })

}

function getAppDetails(query) {
    return new Promise((resolve, reject) => {

        Connection.then(() => {
                // Query
                return sql
                    .query `select * from AppStore`
            })
            .then(result => {
                resolve(result.recordset)
            })
            .catch((err) => {
                reject(err);
            })
    })

}

function addAppDetails(query) {

    return new Promise((resolve, reject) => {

        Connection.then(() => {
                // Query
                return sql
                    .query `INSERT INTO
                    AppStore (
                      PatientID ,
                      APPNAME,
                      APPID,
                      APPDETAILS,
                      VERSION,
                      URL,
                      RATING,
                      ROUTESCREEN
                      
                    ) VALUES (
                      ${query.PatientID},
                      ${query.APPNAME},
                      ${query.APPID},
                      ${query.APPDETAILS},
                      ${query.VERSION},
                      ${query.URL},
                      ${query.RATING},
                      ${query.ROUTESCREEN}
                    )`;
            })
            .then(result => {
                resolve(result)
            })
            .catch((err) => {
                reject(err);
            })
    })

}

function deleteAppDetails(query) {

    return new Promise((resolve, reject) => {
// console.log(typeof(query.id), 'typeeeeee')
console.log(query.id, 'qqq')
        Connection.then(() => {
                // Query
                return sql
                    .query `DELETE FROM AppStore WHERE APPID=${query.id}`;
            })
            .then(result => {
                resolve(result)
            })
            .catch((err) => {
                reject(err);
            })
    })

}

function getMedicationDetails() {

    return new Promise((resolve, reject) => {
        Connection.then(() => {
                // Query
                return sql
                    .query `select * from MEDICATION_DETAILS`;
            })
            .then(result => {
                resolve(result)
            })
            .catch((err) => {
                reject(err);
            })
    })

}

function getDocuments() {

    return new Promise((resolve, reject) => {
        Connection.then(() => {
                // Query
                return sql
                    .query `select * from health_record`;
            })
            .then(result => {
                resolve(result)
            })
            .catch((err) => {
                reject(err);
            })
    })

}

function getDocumentbyType(doc_type) {

    return new Promise((resolve, reject) => {
        Connection.then(() => {
                // Query
                return sql
                    .query `select * from health_record where doc_type=${doc_type}`;
            })
            .then(result => {
                resolve(result)
            })
            .catch((err) => {
                reject(err);
            })
    })

}

module.exports = router;
module.exports.Register = Register;
module.exports.Login = Login;
module.exports.getAppDetails = getAppDetails;
module.exports.addAppDetails = addAppDetails;
module.exports.deleteAppDetails = deleteAppDetails;
module.exports.getMedicationDetails = getMedicationDetails;
module.exports.getDocuments = getDocuments;
module.exports.getDocumentbyType = getDocumentbyType;