var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

router.post('/getUserInfor',function(req,res,next){
    req.pool.getConnection( function(err,connection) {
        var user_id = req.body.u_id;
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

router.get('/getAdminInfor',function(req,res,next){
    req.pool.getConnection( function(err,connection) {
        var admin_id = req.session.ID;
        var sql_params = new Array();
        sql_params.push(admin_id);
        if (err) {
            res.sendStatus(500);
            return;
        }
        var query = "SELECT * FROM admin where ID = ?;";
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

router.post('/updateAdminInfor',function(req,res,next){
    req.pool.getConnection( function(err,connection) {
        var admin_id = req.session.ID;
        var name = req.body.name;
        var number= req.body.number;
        var address= req.body.address;

        

        var sql_params = new Array();
        sql_params.push(name);
        sql_params.push(number);
        sql_params.push(address);
        sql_params.push(admin_id);

        if (err) {
            res.sendStatus(500);
            return;
        }
        var query = "UPDATE admin SET name= ?,contact_number = ?, address = ? where ID = ?";
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

router.post('/updateAdminInfor',function(req,res,next){
    req.pool.getConnection( function(err,connection) {
        var admin_id = req.session.ID;
        var name = req.body.name;
        var number= req.body.number;
        var address= req.body.address;

        

        var sql_params = new Array();
        sql_params.push(name);
        sql_params.push(number);
        sql_params.push(address);
        sql_params.push(admin_id);

        if (err) {
            res.sendStatus(500);
            return;
        }
        var query = "UPDATE admin SET name= ?,contact_number = ?, address = ? where ID = ?";
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

router.post('/signinAdmin',function(req,res,next){
    req.pool.getConnection( function(err,connection) {
        var number= req.body.number;
        var password= req.body.pwd;

        

        var sql_params = new Array();
        sql_params.push(password);
        sql_params.push(number);

        if (err) {
            res.sendStatus(500);
            return;
        }
        var query = "INSERT INTO admin(password,contact_number)VALUES(?,?);";
        connection.query(query, sql_params,function(err, rows, fields) {
            if (err) {
                res.sendStatus(500);
                return;
            }
        });
        var query2 = "select max(ID) as ID from admin";
        connection.query(query2,function(err, rows, fields) {
            connection.release(); // release connection
            if (err) {
                res.sendStatus(500);
                return;
            }
            res.json(rows);
        });
        
    });
});

router.get('/ShowAllUser',function(req,res,next){
    req.pool.getConnection( function(err,connection) {
        if (err) {
            res.sendStatus(500);
            return;
        }
        var query = "select user.ID,user.health,venue.name,venue.hotspot,trip.arrival_time from user join trip on user.ID = trip.user_id join venue on venue.ID = trip.venue_id;";
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

router.get('/ShowPostiveCase',function(req,res,next){
    req.pool.getConnection( function(err,connection) {
        if (err) {
            res.sendStatus(500);
            return;
        }
        var query = "select user.ID,user.health,venue.name,venue.hotspot,trip.arrival_time from user join trip on user.ID = trip.user_id join venue on venue.ID = trip.venue_id where user.health = 1;";
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


router.get('/Jumpto_Admin_update_user',function(req,res,next){
    res.send(
        `
        <form class="pure-form pure-form-stacked">
    <fieldset>
        <div>
            <label for="First name">First name:</label> <input id="First name" type="text" placeholder="">
        </div>
        <div>
            <label for="Last name">Last name:</label> <input id="Last name" type="text" placeholder="">
        </div>
        <div>
            <label for="Phone number">Phone number:</label> 
            <input id="Phone number" type="text" placeholder="">
        </div>
        <div>
            <label for="Email">Email:</label> 
            <input id="Email" type="text" placeholder="">
        </div>

        <div>
            <label for="Home address">Home address:</label> 
            <input id="Home address" type="text"placeholder="">
        </div> 
            <label for="state of health">State of Health</label> 
            <select id="state of health">
                <option value="postive">postive</option>
                <option value="negative" selected="selected">negative</option>
            </select> 
            <button type="submit" onclick="Admin_updateUserInfor()" class="pure-button pure-button-primary">Confirm</button>
    </fieldset>
</form>`
        );
});

router.post('/updateUserInfor',function(req,res,next){
    req.pool.getConnection( function(err,connection) {
        var first_name = req.body.first_name;
        var last_name = req.body.last_name;
        var number= req.body.number;
        var Email= req.body.Email;
        var address= req.body.address;
        var health= req.body.health;
        var uid = req.body.uid;
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
        sql_params.push(uid);
        
        console.log(sql_params);
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

router.get('/ShowAllVenue',function(req,res,next){
    req.pool.getConnection( function(err,connection) {
        if (err) {
            res.sendStatus(500);
            return;
        }
        var query = "select venue.ID,venue.name,venue.hotspot from venue join manager_venues on venue.ID = manager_venues.venue_id";
        connection.query(query,function(err, rows, fields) {
            connection.release(); // release connection
            if (err) {
                res.sendStatus(500);
                return;
            }
            res.json(rows);
        });
    }); 
});

router.get('/ShowHotSpotVenue',function(req,res,next){
    req.pool.getConnection( function(err,connection) {
        if (err) {
            res.sendStatus(500);
            return;
        }
        var query = "select venue.ID,venue.name,venue.hotspot from venue join manager_venues on venue.ID = manager_venues.venue_id where hotspot = 1;";
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

router.post('/ViewCheckInHistory',function(req,res,next){
    var v_id = req.body.id;
    var sql_params = new Array();
    sql_params.push(v_id);
    req.pool.getConnection( function(err,connection) {
        if (err) {
            res.sendStatus(500);
            return;
        }
        var query = "select user.ID,user.health,venue.name,venue.hotspot,trip.arrival_time from user join trip on user.ID = trip.user_id join venue on trip.venue_id = venue.ID join manager_venues on venue.ID = manager_venues.venue_id where venue.ID = ?;";
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

router.get('/jumpto_Venue_edit',function(req,res,next){
    res.send(
        `
        <div id="Venue_infor">
        <form class="pure-form pure-form-stacked">
            <fieldset>
                <div><label for="Venue Name">Venue Name</label> <input id="Venue Name" type="text" placeholder=""></div>
                <div><label for="Longtitude">Longtitude</label> <input id="Longtitude" type="text" placeholder=""></div>
                <div><label for="Latitude">Latitude</label> <input id="Latitude" type="text" placeholder=""></div>
                <div><label for="Country">Country</label> <input id="Country" type="text" placeholder=""></div>
                <div><label for="State">State</label> <input id="State" type="text" placeholder=""></div>
                <div><label for="City">City</label> <input id="City" type="text" placeholder=""></div>
                <div><label for="Suburb">Suburb</label> <input id="Suburb" type="text" placeholder=""></div>
                <div><label for="Address">Address</label> <input id="Address" type="text" placeholder=""></div> 
                <label for="hotspot">Hotspot setting:</label> 
                    <select id="hotspot">
                        <option value="Hotspot">Flagged as hotspot</option>
                        <option value="Not_Hotspot" selected="selected">Not hotspot</option>
                    </select> 
                <button type="submit" class="pure-button pure-button-primary" onclick = "Admin_editVenue()">Update</button>
            </fieldset>
        </form>
    </div>`
        );
});

router.post('/getVenueInfor',function(req,res,next){
    req.pool.getConnection( function(err,connection) {
        var v_id = req.body.v_id;
        var sql_params = new Array();
        sql_params.push(v_id);
        if (err) {
            res.sendStatus(500);
            return;
        }
        var query = "SELECT * FROM venue where ID = ?;";
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

router.post('/editVenue',function(req,res,next){
    req.pool.getConnection( function(err,connection) {
    
    var Venue_Name = req.body.Venue_Name; 
    var Longtitude = req.body.Longtitude; 
    var Latitude = req.body.Latitude; 
    var Country = req.body.Country; 
    var State = req.body.State; 
    var City = req.body.City; 
    var Suburb = req.body.Suburb; 
    var Address = req.body.Address; 
    var hotspot = req.body.hotspot;
    var vid = req.body.v_id;
    if(req.body.hotspot == "Hotspot"){
        hotspot = "1";
    }else{
        hotspot = "0";
    }
        
    var sql_params1 = new Array();
    
    sql_params1.push(Venue_Name); 
    sql_params1.push(Longtitude); 
    sql_params1.push(Latitude); 
    sql_params1.push(Country); 
    sql_params1.push(State); 
    sql_params1.push(City); 
    sql_params1.push(Suburb); 
    sql_params1.push(Address); 
    sql_params1.push(hotspot);
    sql_params1.push(vid);

        var query3 = "UPDATE venue SET name = ?,longtitude = ?,latitude = ?,country = ?,state = ?,city = ?,suburb = ?,detailed_address = ?,hotspot = ? WHERE ID = ?;";
        connection.query(query3, sql_params1,function(err, rows, fields) {
            connection.release(); // release connection
            if (err) {
                console.log(err);
                res.sendStatus(500);
                return;
            }
        });
    });
});