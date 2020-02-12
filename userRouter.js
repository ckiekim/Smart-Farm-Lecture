const express = require('express');
const dbModule = require('./db-module');
const sqlite3 = require('sqlite3').verbose(); 

const router = express.Router();

router.get('/dept', function(req, res) {
    dbModule.getAllDepts(function(rows) {
        console.log(rows);
        let dept = '<h3>';
        for (row of rows) {
            dept += `${row.did}: ${row.name}<br>`;
        }
        dept += '</h3>'
        res.send(dept);
    });
});
router.get('/dept101', function(req, res) {
    did = 101;
    dbModule.getDept(did, function(row) {
        console.log(row);
        res.send(`<h1>userRouter.js: ${row.did}, ${row.name}</h1>`);
    });
});
router.get('/list', function(req, res) {
    dbModule.getAllUsers(function(rows) {
        let view = require('./view/userList');
        let html = view.userList();
        console.log(rows);
        res.send(html);
    });
});
router.get('/register', function(req, res) {
    dbModule.registerUser('sales', '1234', '강영업', 102, '01023456782', function() {
        res.send('<h1>Register Done</h1>');
    });
});

module.exports = router;
