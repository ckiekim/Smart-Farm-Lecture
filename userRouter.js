const express = require('express');
const dbModule = require('./db-module');

const router = express.Router();

router.get('/list', function(req, res) {
    dbModule.getAllUsers(function(rows) {
        let view = require('./view/listUser');
        let html = view.listUser(rows);
        //console.log(rows);
        res.send(html);
    });
});
router.get('/register', function(req, res) {
    dbModule.getAllDepts(function(rows) {
        let view = require('./view/registerUser');
        let html = view.registerUser(rows);
        //console.log(rows);
        res.send(html);
    });
});
router.get('/update/uid/:uid', function(req, res) {
    res.send('update');
});
router.get('/password/uid/:uid', function(req, res) {
    res.send('password');
});
router.get('/delete/uid/:uid', function(req, res) {
    res.send('delete');
});

module.exports = router;
