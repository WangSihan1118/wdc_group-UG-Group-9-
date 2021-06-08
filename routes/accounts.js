var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

router.get('/jump_to_change_my_infor',function(req,res,next){
    res.send(
        `
            <div id="User_Infor">
        <form class="pure-form pure-form-stacked">
            <fieldset>
                <div><label for="First name">First name:</label> <input id="First name" type="text" placeholder="">
                </div>
                <div><label for="Last name">Last name:</label> <input id="Last name" type="text" placeholder=""></div>
                <div><label for="Phone number">Phone number:</label> <input id="Phone number" type="text"
                        placeholder=""></div>
                <div><label for="Email">Email:</label> <input id="Email" type="text" placeholder=""></div>
                <div><label for="Home address">Home address:</label> <input id="Home address" type="text"
                        placeholder=""></div> <label for="state of health">State of Health</label> <select
                    id="state of health">
                    <option value="postive">postive</option>
                    <option value="negative" selected="selected">negative</option>
                </select> <button type="submit" onclick="User_updateInfor()"
                    class="pure-button pure-button-primary">Confirm</button>
            </fieldset>
        </form>
    </div>
        `
    );
});
router.get('/jump_to_view_my_trip',function(req,res,next){
    res.send(
        `
            <div id="userTrip">
        <p>View my trip</p> <button type="button" onclick="User_getAllTripHistory()" class="pure-button">Show all
            trips</button> <button type="button" onclick="User_getHotSpot()" class="pure-button">Show hotspot
            trips</button>
        <hr>
        <table class="pure-table">
            <tbody id="trip_table">
                <tr>
                    <th>User ID</th>
                    <th>Health Situation</th>
                    <th>Venue name</th>
                    <th>Venue status</th>
                    <th>Arrival time</th>
                </tr>
            </tbody>
        </table>
        <table></table>
    </div>
        `
    );
});
router.get('/jump_to_Edit_Venue_manager_information',function(req,res,next){
    res.send(
        `
                <div id="Manager_Infor">
        <form class="pure-form pure-form-stacked">
            <fieldset>
                <div><label for="First name">First name</label> <input id="First name" type="text" placeholder=""></div>
                <div><label for="Last name">Last name</label> <input id="Last name" type="text" placeholder=""></div>
                <div><label for="Phone number">Phone number</label> <input id="Phone number" type="text" placeholder="">
                </div>
                <div><label for="Email">Email</label> <input id="Email" type="text" placeholder=""></div>
                <div><label for="Home address">Home address</label> <input id="Home address" type="text" placeholder="">
                </div> <button type="submit" onclick="Manager_updateManagerInfor()"
                    class="pure-button pure-button-primary">Confirm</button>
            </fieldset>
        </form>
    </div>
        `
    );
});
router.get('/jump_to_Show_my_venue',function(req,res,next){
    res.send(
        `
                    <div id = "Owner_manage_venue">
            <p>Manage my venue</p>
            <button class="pure-button" type = "button" onclick = "Manager_ShowAllVenue()">Show all venue</button>
            <button class="pure-button" type = "button" onclick = "Manager_ShowHotSpotVenue()">Show hotspot venue</button>
            <button class="pure-button" type = "button" onclick = "Manager_jumpto_Venue_CreateNew()">Create a new Venue</button>
            <hr>
            
            <form class="pure-form">
                <fieldset>
                    <input type="text" id = "vid_input" class = "ID_input" width = "80%" placeholder=" Please input the Venue ID your want to manage first">
                    <button class="pure-button" onclick = "Manager_ViewCheckInHistory()" type = "button">View the trip history of venue</button>
                    <button class="pure-button" onclick = "Manager_jumpto_Venue_edit()" type = "button">Edit the venue</button>
                </fieldset>
            </form>
                
            <div id = "content">
                <table class="pure-table">
                    <tbody id = "venue_table">
                    <th>Venue id</th>
                    <th>Venue name</th>
                    <th>Venue Status</th>
                    </tbody>
                </table>
            <div>
        </div>
        `
    );
});
router.get('/jump_to_admin_change_my_infor',function(req,res,next){
    res.send(
        `
            <div id="admin_infor">
        <form class="pure-form pure-form-stacked">
            <fieldset>
                <div><label for="Official Name">Official Name</label> <input id="Official Name" type="text"
                        placeholder=""></div>
                <div><label for="Official Contact Number">Official Contact Number</label> <input
                        id="Official Contact Number" type="text" placeholder=""></div>
                <div><label for="Official Email Address">Official Email Address</label> <input
                        id="Official Email Address" type="text" placeholder=""></div>
                <div><label for="Official Address">Official Address</label> <input id="Official Address" type="text"
                        placeholder=""></div> <button type="submit" onclick="Admin_updateAdminInfor()"
                    class="pure-button pure-button-primary">Confirm</button>
            </fieldset>
        </form>
    </div>
        `
    );
});
router.get('/jump_to_RegisterAdmin',function(req,res,next){
    res.send(
        `
          <div id = "login_body">
    <h2 style="text-align: center;">Create a new Admin account</h2>
    <hr>
    <form  class="pure-form pure-form-stacked">
      <fieldset>
        <label for="Number:">Contact Number:</label>
        <input id = "Number" class = "Register_input" type ="text" placeholder="">

        <label for="Password:">Password:</label>
        <input id = "Password" class = "Register_input" type ="password" placeholder="">

        <label for="Confirm Password:">Confirm Password:</label>
        <input id = "Confirm Password" class = "Register_input" type ="password" placeholder="">
        <br>
        
          <button type="submit" class="pure-button pure-button-primary" name="button" id="button" style="float: right;" onclick = "Admin_signinAdmin()">SIGN-IN</button>
      </fieldset>
    </form>
  </div>
        `
    );
});
router.get('/jump_to_admin_manage_user',function(req,res,next){
    res.send(
        `
                <div id = "manage_user">
            <p>Manage users</p>
            <button class="pure-button" type = "button" onclick = "Admin_ShowAllUser()">Show all users' trips</button>
            <button class="pure-button" type = "button" onclick = "Admin_ShowPostiveCase()">Show postive cases' trips</button>
            <hr>
            
            <form class="pure-form">
                <fieldset>
                    <input type="text" id = "uid_input" class = "ID_input" width = "80%" placeholder=" Please input the Venue ID your want to manage first">
                    <button class="pure-button" type = "button" onclick = "Jumpto_Admin_update_user()">Edit the User</button>
                </fieldset>
            </form>
            
            <div id = "content">
                <table class="pure-table">
                    <tbody id = "trip_table">
                        <th>User ID</th>
                        <th>Health Situation</th>
                        <th>Venue name</th>
                        <th>Venue status</th>
                        <th>Arrival time</th>
                    </tbody>
                <table>
            </div>
        </div>
        `
    );
});
router.get('/jump_to_admin_manage_venue',function(req,res,next){
    res.send(
        `
                <div id = "Owner_manage_venue">
            <p>Manage venues</p>
            <button class="pure-button" type = "button" onclick = "Admin_ShowAllVenue()">Show all venue</button>
            <button class="pure-button" type = "button" onclick = "Admin_ShowHotSpotVenue()">Show hotspot venue</button>
            <hr>
            
            <form class="pure-form">
                <fieldset>
                    <input type="text" id = "vid_input" class = "ID_input" width = "80%" placeholder=" Please input the Venue ID your want to manage first">
                    <button class="pure-button" onclick = "Admin_ViewCheckInHistory()" type = "button">View the trip history of venue</button>
                    <button class="pure-button" onclick = "Admin_jumpto_Venue_edit()" type = "button">Edit the venue</button>
                </fieldset>
            </form>
                
            <div id = "content">
                <table class="pure-table">
                    <tbody id = "venue_table">
                    <th>Venue id</th>
                    <th>Venue name</th>
                    <th>Venue Status</th>
                    </tbody>
                </table>
            <div>
        </div>
        `
    );
});