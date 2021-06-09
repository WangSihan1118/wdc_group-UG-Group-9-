var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

router.post('/login',function(req,res,next){
    req.pool.getConnection( function(err,connection) {
        //var user_id = req.session.user_id;
        var ID = req.body.ID;
        var pwd = req.body.pwd;
        var login_type= req.body.login_type;
        var query;
        if(login_type == "User"){
            login_type = "user";
            query = "select * from user where ID = ? and password = ?";
        }else if(login_type == "Manager"){
            login_type = "manager";
            query = "select * from manager where ID = ? and password = ?";
        }else if(login_type == "Admin"){
            login_type = "admin";
            query = "select * from admin where ID = ? and password = ?";
        }
        var sql_params = new Array();
        sql_params.push(ID);
        sql_params.push(pwd);
        

        if (err) {
            res.sendStatus(500);
            return;
        }
        
        connection.query(query, sql_params,function(err, rows, fields) {
            connection.release(); // release connection
            if (err) {
                console.log(err);
                res.sendStatus(500);
                return;
            }
            if(rows.length == 0){
                res.send({"result": false});
            }else{
                req.session.login = true;
                req.session.type = login_type;
                req.session.ID = ID;

                res.send({"result": true});
            }
        });
    });
});

router.post('/register',function(req,res,next){
    req.pool.getConnection( function(err,connection) {
        var number = req.body.number;
        var pwd = req.body.pwd;
        var r_type= req.body.r_type;
        var query;
        if(r_type == "User"){
            r_type = "user";
            query = "INSERT INTO user (password,phone_number) VALUES (?,?);";
        }else if(r_type == "Manager"){
            r_type = "manager";
            query = "INSERT INTO manager (password,phone_number) VALUES (?,?);";
        }
        var sql_params = new Array();
        sql_params.push(pwd);
        sql_params.push(number);

        if (err) {
            res.sendStatus(500);
            return;
        }
        connection.query(query, sql_params,function(err, rows, fields) {
            if (err) {
                res.sendStatus(500);
                return;
            }
        });
        var query2;
        if(r_type == "user"){
            query2 = "select max(ID) as ID from user";
        }else if(r_type == "manager"){
            query2 = "select max(ID) as ID from manager";
        }
        connection.query(query2,function(err, rows, fields) {
            connection.release(); // release connection
            if (err) {
                res.sendStatus(500);
                return;
            }
            rows = JSON.stringify(rows);
            res.send(rows);
        });
    });
});

router.post('/checkin',function(req,res,next){
    req.pool.getConnection( function(err,connection) {
        var user_id = req.session.ID;
        var venue_id= req.body.ck;
        var t = new Date().toISOString().slice(0, 19).replace('T', ' ');
        
        
        var sql_params = new Array();
        sql_params.push(t);
        sql_params.push(venue_id);
        sql_params.push(user_id);

        if (err) {
            res.sendStatus(500);
            return;
        }
        var query = "INSERT INTO trip(arrival_time,venue_id,user_id) VALUES(?,?,?);";
        connection.query(query, sql_params,function(err, rows, fields) {
            connection.release(); // release connection
            if (err) {
                res.sendStatus(500);
                return;
            }
            res.send(true);
        });
    });
});