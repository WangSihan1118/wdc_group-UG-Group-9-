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
                res.sendStatus(500);
                return;
            }
            if(rows){
                req.session.type = login_type;
                req.session.ID = ID;
                res.send(true);
            }else{
                res.send(false);
            }
        });
    });
});

router.post('/register',function(req,res,next){
    req.pool.getConnection( function(err,connection) {
        //var user_id = req.session.user_id;
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
        //sql_params.push(user_id);

        if (err) {
            console.log(err+"1");
            res.sendStatus(500);
            return;
        }
        connection.query(query, sql_params,function(err, rows, fields) {
            if (err) {
                console.log(err+"2");
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
                console.log(err+"3");
                res.sendStatus(500);
                return;
            }
            console.log(rows);
            rows = JSON.stringify(rows);
            console.log(rows);
            var new_aid = rows[0].ID;
            console.log(new_aid);
            res.send(rows);
        });
    });
});

router.post('/checkin',function(req,res,next){
    req.pool.getConnection( function(err,connection) {
        //var user_id = req.session.user_id;
        var login_type= req.body.ck;

        var sql_params = new Array();
        sql_params.push(first_name);
        //sql_params.push(user_id);

        if (err) {
            res.sendStatus(500);
            return;
        }
        var query = "UPDATE user SET first_name= ?, last_name = ?,phone_number = ?, email = ?,address = ?, health = ? where ID = ?";
        connection.query(query, sql_params,function(err, rows, fields) {
            connection.release(); // release connection
            if (err) {
                res.sendStatus(500);
                return;
            }
            res.json(rows);
        });
    });
});