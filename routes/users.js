var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
router.get('/getUserInfor',function(req,res,next){
    req.pool.getConnection( function(err,connection) {
        var user_id = req.session.ID;
        var sql_params = new Array();
        sql_params.push(user_id);
        if (err) {
            res.sendStatus(500);
            return;
        }
        var query = "SELECT * FROM user where ID = ?;";
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

//example
router.post('/updateInfor',function(req,res,next){
    req.pool.getConnection( function(err,connection) {
        var user_id = req.session.ID;
        var first_name = req.body.first_name;
        var last_name = req.body.last_name;
        var number= req.body.number;
        var Email= req.body.Email;
        var address= req.body.address;
        var health= req.body.health;
        if(req.body.health == "postive"){
            health = "1";
        }else{
            health = "0";
        }
        

        var sql_params = new Array();
        sql_params.push(first_name);
        sql_params.push(last_name);
        sql_params.push(number);
        sql_params.push(Email);
        sql_params.push(address);
        sql_params.push(health);
        sql_params.push(user_id);

        if (err) {
            res.sendStatus(500);
            return;
        }
        var query = "UPDATE user SET first_name= ?, last_name = ?,phone_number = ?, email = ?,address1 = ?, health = ? where ID = ?";
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


router.get('/getTrips',function(req,res,next){
    var sql_params = new Array();
    var user_id = req.session.ID;
    sql_params.push(user_id);
    req.pool.getConnection( function(err,connection) {
        if (err) {
            res.sendStatus(500);
            return;
        }
        var query = "select user.ID,user.health,venue.name,venue.hotspot,trip.arrival_time from user join trip on user.ID = trip.user_id join venue on venue.ID = trip.venue_id where user.id = ?;";
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

router.get('/getHotspots',function(req,res,next){
    var sql_params = new Array();
    var user_id = req.session.ID;
    sql_params.push(user_id);
    req.pool.getConnection( function(err,connection) {
        if (err) {
            res.sendStatus(500);
            return;
        }
        var query = "select user.ID,user.health,venue.name,venue.hotspot,trip.arrival_time from user join trip join venue on venue.ID = venue_id where venue.hotspot = 1 and user.id = ?;";
        connection.query(query, sql_params,function(err,rows, fields) {
            connection.release(); // release connection
            if (err) {
                res.sendStatus(500);
                return;
            }
            res.json(rows);
        });
    }); 
});