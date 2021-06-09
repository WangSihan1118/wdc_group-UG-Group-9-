function Admin_getAdminInfor(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var infor = JSON.parse(this.responseText);
            document.getElementById("Official Name").value = infor[0].name;
            document.getElementById("Official Contact Number").value = infor[0].contact_number;
            document.getElementById("Official Address").value = infor[0].address;
            return;
        }
    };
    xhttp.open("GET", "/admins/getAdminInfor", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}

function Admin_getUserInfor(){
    var uid = document.getElementById("uid_input").value;
    var xhttp = new XMLHttpRequest();    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var infor = JSON.parse(this.responseText);
            document.getElementById("First name").value = infor[0].first_name;
            document.getElementById("Last name").value = infor[0].last_name;
            document.getElementById("Phone number").value = infor[0].phone_number;
            document.getElementById("Email").value = infor[0].email;
            document.getElementById("Home address").value = infor[0].address1;
            return;
        }
    };
    xhttp.open("POST", "/admins/getUserInfor", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({
        u_id:uid
    }));
}

//admin_change_my_infor.html
function Admin_updateAdminInfor() {
    var name = document.getElementById("Official Name").value;
    var number = document.getElementById("Official Contact Number").value;
    var address = document.getElementById("Official Address").value;

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/admins/updateAdminInfor", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({ 
        name: name, 
        number: number,
        address: address,
    }));
}

//RegisterAdmin.html
function Admin_signinAdmin() {
    var number = document.getElementById("Number").value;
    var pwd = document.getElementById("Password").value;
    var dpwd = document.getElementById("Confirm Password").value;
    
    if(pwd!=dpwd){
        alert("Please check your password!");
        return;
    }
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var a_id = JSON.parse(this.responseText)[0].ID;
            alert("New admin ID is "+a_id);
            return;
        }
    };
    xhttp.open("POST", "/admins/signinAdmin", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({ 
        number:number,
        pwd:pwd,
    }));
}


function Admin_ShowAllUser(){
    var table_content = 
        `<table class="pure-table">
        <th>User ID</th>
         <th>Health Situation</th>
         <th>Venue name</th>
         <th>Venue status</th>
         <th>Arrival time</th>`;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            /*document.getElementById("output").innerText = this.responseText;*/
            var infor_collection = JSON.parse(this.responseText);
            //console.log(infor_collection);
            for(x in infor_collection){
                var userID = infor_collection[x].ID;
                var venue_name = infor_collection[x].name;
                var arrival_time = infor_collection[x].arrival_time;
                var health = infor_collection[x].health;
                if(health == 1){
                    health = "Postive";
                }else{
                    health = "Negative";
                }
                var hotspot = infor_collection[x].hotspot;
                if(hotspot == 1){
                    hotspot = "Hotspot";
                }else{
                    hotspot = "Not hotspot";
                }
                table_content = table_content+
                `
                <tr>
                <td>${userID}</td>
                <td>${health}</td>
                <td>${venue_name}</td>
                <td>${hotspot}</td>
                <td>${arrival_time}</td>
                </tr>
                `;
            }
            table_content= table_content+`</tbody> </table>`;
            document.getElementById("content").innerHTML = table_content;
        }
    };
    xhttp.open("GET", "/admins/ShowAllUser", true);
    xhttp.send();
}

function Admin_ShowPostiveCase(){
    var table_content = 
        `<table class="pure-table">
        <th>User ID</th>
         <th>Health Situation</th>
         <th>Venue name</th>
         <th>Venue status</th>
         <th>Arrival time</th>`;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            /*document.getElementById("output").innerText = this.responseText;*/
            var infor_collection = JSON.parse(this.responseText);
            //console.log(infor_collection);
            for(x in infor_collection){
                var userID = infor_collection[x].ID;
                var venue_name = infor_collection[x].name;
                var arrival_time = infor_collection[x].arrival_time;
                var health = infor_collection[x].health;
                if(health == 1){
                    health = "Postive";
                }else{
                    health = "Negative";
                }
                var hotspot = infor_collection[x].hotspot;
                if(hotspot == 1){
                    hotspot = "Hotspot";
                }else{
                    hotspot = "Not hotspot";
                }
                table_content = table_content+
                `
                <tr>
                <td>${userID}</td>
                <td>${health}</td>
                <td>${venue_name}</td>
                <td>${hotspot}</td>
                <td>${arrival_time}</td>
                </tr>
                `;
            }
            table_content= table_content+`</tbody> </table>`;
            document.getElementById("content").innerHTML = table_content;
        }
    };
    xhttp.open("GET", "/admins/ShowPostiveCase", true);
    xhttp.send();
}

//Manager User
function Jumpto_Admin_update_user(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("content").innerHTML = this.responseText;
            Admin_getUserInfor();
            return;
        }
    };
    xhttp.open("GET", "/admins/Jumpto_Admin_update_user", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({ 
        
    }));
}

function Admin_updateUserInfor(){
    var first_name = document.getElementById("First name").value;
    var last_name = document.getElementById("Last name").value;
    var number = document.getElementById("Phone number").value;
    var Email = document.getElementById("Email").value;
    var address = document.getElementById("Home address").value;
    var health = document.getElementById("state of health").value;
    var uid = document.getElementById("uid_input").value;


    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/admins/updateUserInfor", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({ 
        first_name: first_name, 
        last_name: last_name,
        number: number,
        Email: Email,
        address: address,
        health: health,
        uid:uid
    }));
}

//admin_manage_venue.html
function Jumpto_Admin_manage_venue(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "/admins/Admin_Manage_venue", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({ 

    }));
}

function Jumpto_Admin_View_venue_trip_history(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "/admins/Admin_View_venue_trip_history", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({ 
    }));
}

function Admin_ShowAllVenue(){
            var table_content = 
        `<table class="pure-table">
            <tbody id = "venue_table">
            <th>Venue id</th>
            <th>Venue name</th>
            <th>Venue Status</th>
            `;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            /*document.getElementById("output").innerText = this.responseText;*/
            var infor_collection = JSON.parse(this.responseText);
            //console.log(infor_collection);
            for(x in infor_collection){
                var ID = infor_collection[x].ID;
                var name = infor_collection[x].name;
                var hotspot = infor_collection[x].hotspot;
                if(hotspot == 1){
                    hotspot = "Hotspot";
                }else{
                    hotspot = "Not hotspot";
                }
                table_content = table_content+
                `
                <tr>
                <td>${ID}</td>
                <td>${name}</td>
                <td>${hotspot}</td>
                </tr>
                `;
            }
            table_content= table_content+`</tbody> </table>`;
            document.getElementById("content").innerHTML = table_content;
        }
    };
    xhttp.open("GET", "/admins/ShowAllVenue", true);
    xhttp.send();
}

function Admin_ShowHotSpotVenue(){
        var table_content = 
        `<table class="pure-table">
            <tbody id = "venue_table">
            <th>Venue id</th>
            <th>Venue name</th>
            <th>Venue Status</th>
            `;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            /*document.getElementById("output").innerText = this.responseText;*/
            var infor_collection = JSON.parse(this.responseText);
            //console.log(infor_collection);
            for(x in infor_collection){
                var ID = infor_collection[x].ID;
                var name = infor_collection[x].name;
                var hotspot = infor_collection[x].hotspot;
                if(hotspot == 1){
                    hotspot = "Hotspot";
                }else{
                    hotspot = "Not hotspot";
                }
                table_content = table_content+
                `
                <tr>
                <td>${ID}</td>
                <td>${name}</td>
                <td>${hotspot}</td>
                </tr>
                `;
            }
            table_content= table_content+`</tbody> </table>`;
            document.getElementById("content").innerHTML = table_content;
        }
    };
    xhttp.open("GET", "/admins/ShowHotSpotVenue", true);
    xhttp.send();
}

function Admin_ViewCheckInHistory(){
    var table_content = 
        `<table class="pure-table">
        <th>User ID</th>
         <th>Health Situation</th>
         <th>Venue name</th>
         <th>Venue status</th>
         <th>Arrival time</th>`;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            /*document.getElementById("output").innerText = this.responseText;*/
            var infor_collection = JSON.parse(this.responseText);
            //console.log(infor_collection);
            for(x in infor_collection){
                var userID = infor_collection[x].ID;
                var venue_name = infor_collection[x].name;
                var arrival_time = infor_collection[x].arrival_time;
                var health = infor_collection[x].health;
                if(health == 1){
                    health = "Postive";
                }else{
                    health = "Negative";
                }
                var hotspot = infor_collection[x].hotspot;
                if(hotspot == 1){
                    hotspot = "Hotspot";
                }else{
                    hotspot = "Not hotspot";
                }
                table_content = table_content+
                `
                <tr>
                <td>${userID}</td>
                <td>${health}</td>
                <td>${venue_name}</td>
                <td>${hotspot}</td>
                <td>${arrival_time}</td>
                </tr>
                `;
            }
            table_content= table_content+`</tbody> </table>`;
            document.getElementById("content").innerHTML = table_content;
        }
    };
    var v_id = document.getElementById("vid_input").value;
    xhttp.open("POST", "/admins/ViewCheckInHistory", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({id: v_id}));
}

function Admin_jumpto_Venue_edit(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("content").innerHTML = this.responseText;
            Admin_getVenueInfor();
            return;
        }
    };
    xhttp.open("GET", "/admins/jumpto_Venue_edit", true);
    xhttp.send();
}

function Admin_getVenueInfor(){
    var v_id = document.getElementById("vid_input").value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var infor = JSON.parse(this.responseText);
            document.getElementById("Venue Name").value =infor[0].name;
            document.getElementById("Longtitude").value =infor[0].longtitude;
            document.getElementById("Latitude").value =infor[0].latitude;
            document.getElementById("Country").value =infor[0].country;
            document.getElementById("State").value =infor[0].state;
            document.getElementById("City").value =infor[0].city;
            document.getElementById("Suburb").value =infor[0].suburb;
            document.getElementById("Address").value =infor[0].detailed_address;
            return;
        }
    };
    xhttp.open("POST", "/admins/getVenueInfor", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({
        v_id:v_id
    }));
}

function Admin_editVenue(){
    var Venue_Name = document.getElementById("Venue Name").value;
    var Longtitude = document.getElementById("Longtitude").value;
    var Latitude = document.getElementById("Latitude").value;
    var Country = document.getElementById("Country").value;
    var State = document.getElementById("State").value;
    var City = document.getElementById("City").value;
    var Suburb = document.getElementById("Suburb").value;
    var Address = document.getElementById("Address").value;
    var hotspot = document.getElementById("hotspot").value;
    var v_id = document.getElementById("vid_input").value;

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/admins/editVenue", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({
        Venue_Name: Venue_Name,
        Longtitude: Longtitude,
        Latitude: Latitude,
        Country: Country,
        State: State,
        City: City,
        Suburb: Suburb,
        Address: Address,
        hotspot: hotspot,
        v_id:v_id
    }));
}
