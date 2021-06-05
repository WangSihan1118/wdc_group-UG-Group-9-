var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

//example
router.post('/addactor',function(req,res,next){
    req.pool.getConnection( function(err,connection) {
        var first_name = req.body.first_name;
        var last_name = req.body.last_name;

        var sql_params = new Array();
        sql_params.push(first_name);
        sql_params.push(last_name);

        if (err) {
            res.sendStatus(500);
            return;
        }
        var query = "INSERT INTO actor (first_name, last_name) VALUES (?, ?)";
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


router.get('/getactors',function(req,res,next){
    req.pool.getConnection( function(err,connection) {
        if (err) {
            res.sendStatus(500);
            return;
        }
        var query = "SELECT last_name, first_name FROM actor;";
        connection.query(query, function(err, rows, fields) {
            connection.release(); // release connection
            if (err) {
                res.sendStatus(500);
                return;
            }
            res.json(rows);
        });
    }); 
});