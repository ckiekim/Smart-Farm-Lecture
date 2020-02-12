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
router.get('/list', function(req, res) {
    dbModule.getAllUsers(function(rows) {
        console.log(rows);
    });
    res.send('userRouter.js: list');
});

module.exports = router;
