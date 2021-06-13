var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

router.get('/getManagerInfor',function(req,res,next){
    req.pool.getConnection( function(err,connection) {
        var manager_id = req.session.ID;
        var sql_params = new Array();
        sql_params.push(manager_id);
        if (err) {
            res.sendStatus(500);
            return;
        }
        var query = "SELECT * FROM manager where ID = ?;";
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

router.post('/updateManagerInfor',function(req,res,next){
    req.pool.getConnection( function(err,connection) {
        var managers_id = req.session.ID;
        var first_name = req.body.first_name;
        var last_name = req.body.last_name;
        var number= req.body.number;
        var Email= req.body.Email;
        
        var sql_params = new Array();
        sql_params.push(first_name);
        sql_params.push(last_name);
        sql_params.push(number);
        sql_params.push(Email);
        sql_params.push(managers_id);

        if (err) {
            res.sendStatus(500);
            return;
        }
     
        var query = "UPDATE manager SET first_name= ?, last_name = ?,phone_number = ?, email = ? where ID = ?";
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
    var managers_id = req.session.ID;
    var sql_params = new Array();
    sql_params.push(managers_id);
    req.pool.getConnection( function(err,connection) {
        if (err) {
            res.sendStatus(500);
            return;
        }
        var query = "select venue.ID,venue.name,venue.hotspot from venue join manager_venues on venue.ID = venue_id where manager_id = ?";
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

router.get('/ShowHotSpotVenue',function(req,res,next){
    var managers_id = req.session.ID;
    var sql_params = new Array();
    sql_params.push(managers_id);
    req.pool.getConnection( function(err,connection) {
        if (err) {
            res.sendStatus(500);
            return;
        }
        var query = "select venue.ID,venue.name,venue.hotspot from venue join manager_venues on venue.ID = venue_id where hotspot = 1 and manager_id = ?;";
        connection.query(query,sql_params, function(err, rows, fields) {
            connection.release(); // release connection
            if (err) {
                res.sendStatus(500);
                return;
            }
            res.json(rows);
        });
    }); 
});


router.get('/jumpto_Venue_CreateNew',function(req,res,next){
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
                <button type="submit" class="pure-button pure-button-primary" onclick = "Manager_createVenue()">Create</button>
            </fieldset>
        </form>
    </div>`
        );
});


router.post('/jumpto_Venue_edit',function(req,res,next){
        req.pool.getConnection( function(err,connection) {
        var venue_id = req.body.v_id;
        var m_id = req.session.ID;
        var sql_params = new Array();
        sql_params.push(venue_id);
        sql_params.push(m_id);
        if (err) {
            res.sendStatus(500);
            return;
        }
        var query = "SELECT * FROM venue join manager_venues on venue.ID = manager_venues.venue_id where manager_venues.venue_id = ? and manager_venues.manager_id= ?;";
        connection.query(query, sql_params,function(err, rows, fields) {
            connection.release(); // release connection
            if (err) {
                res.sendStatus(500);
                return;
            }
            if(rows.length == 0){
                res.sendStatus(403);
            }else{
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
                        <button type="submit" class="pure-button pure-button-primary" onclick = "Manager_editVenue()">Update</button>
                    </fieldset>
                </form>
            </div>`
            );
            }
        });
    });
});


router.post('/createVenue',function(req,res,next){
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
    if(req.body.hotspot == "Flagged as hotspot"){
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

        if (err) {
            res.sendStatus(500);
            return;
        }
        var query = "INSERT INTO venue(name,longtitude,latitude,country,state,city,suburb,detailed_address,hotspot)VALUES(?,?,?,?,?,?,?,?,?);";
        connection.query(query, sql_params1,function(err, rows, fields) {
            if (err) {
                res.sendStatus(500);
                return;
            }
        });
        
        var query2 = "select max(ID) as ID from venue";
        var new_vid;
        connection.query(query2,function(err, rows, fields) {
            if (err) {
                res.sendStatus(500);
                return;
            }
            var sql_params2 = new Array();
            var manager_id = req.session.ID;
            new_vid = JSON.parse(JSON.stringify(rows))[0].ID;
            sql_params2.push(manager_id);
            sql_params2.push(new_vid);
            var query3 = 'INSERT INTO manager_venues(manager_id,venue_id) VALUES (?,?);';
            connection.query(query3, sql_params2,function(err, rows, fields) {
            connection.release(); // release connection
            if (err) {
                res.sendStatus(500);
                return;
            }
        });
        });
    });
});

router.post('/getVenueInfor',function(req,res,next){
    req.pool.getConnection( function(err,connection) {
        var venue_id = req.body.v_id;
        var m_id = req.session.ID;
        var sql_params = new Array();
        sql_params.push(venue_id);
        sql_params.push(m_id);
        if (err) {
            console.log(err);
            res.sendStatus(500);
            return;
        }
        var query = "SELECT * FROM venue join manager_venues on venue.ID = manager_venues.venue_id where manager_venues.venue_id = ? and manager_venues.manager_id= ?;";
        connection.query(query, sql_params,function(err, rows, fields) {
            connection.release(); // release connection
            if (err) {
                console.log(err);
                res.sendStatus(500);
                return;
            }
            res.json(rows);
        });
    });
});

router.post('/editVenue', function (req, res, next) {
    req.pool.getConnection(function (err, connection) {

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
        if (req.body.hotspot == "Hotspot") {
            hotspot = "1";
        } else {
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
        if (err) {
            res.sendStatus(500);
            return;
        }
        //   
        var query = "UPDATE venue SET name = ?,longtitude = ?,latitude = ?,country = ?,state = ?,city = ?,suburb = ?,detailed_address = ?,hotspot = ? WHERE ID = ?;";
        connection.query(query, sql_params1, function (err, rows, fields) {
            connection.release(); // release connection
            if (err) {
                res.sendStatus(500);
                return;
            }
        });
    });
});
router.post('/ViewCheckInHistory',function(req,res,next){
    var sql_params = new Array();
    var manager_id = req.session.ID;
    var v_id = req.body.id;
    sql_params.push(v_id);
    sql_params.push(manager_id);

    req.pool.getConnection( function(err,connection) {
        if (err) {
            res.sendStatus(500);
            return;
        }
        var query = "select user.ID,user.health,venue.name,venue.hotspot,trip.arrival_time from user join trip on user.ID = trip.user_id join venue on trip.venue_id = venue.ID join manager_venues on venue.ID = manager_venues.venue_id where manager_venues.venue_id = ? and manager_venues.manager_id = ?;";
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

