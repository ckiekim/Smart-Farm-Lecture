const express = require('express');
const dbModule = require('./db-module');
const sqlite3 = require('sqlite3').verbose(); 

const router = express.Router();

router.get('/dept', function(req, res) {
    dbModule.getAllDepts(function(rows) {
        console.log(rows);
    });
    res.send('userRouter.js: dept');
});

router.get('/register', function(req, res) {
    let db = new sqlite3.Database("db/smartfarm.db");
    let sql = `SELECT * FROM dept`;
    db.all(sql, function(err, rows) {
        if (err) {
            console.error('getAllDepts DB 오류', err);
            return;
        }
        console.log(rows);
    });
    db.close();
    res.send('userRouter.js');
});

module.exports = router;
