//Edit_Venue_manager_information.html
function Manager_updateManagerInfor() {
    var first_name = document.getElementById("First name").value;
    var last_name = document.getElementById("Last name").value;
    var number = document.getElementById("Phone number").value;
    var Email = document.getElementById("Email").value;


    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/managers/updateManagerInfor", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({
        first_name: first_name,
        last_name: last_name,
        number: number,
        Email: Email,
    }));
}

function Manager_ShowAllVenue(){
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
    xhttp.open("GET", "/managers/ShowAllVenue", true);
    xhttp.send();
}

function Manager_ShowHotSpotVenue(){
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
            table_content = table_content+`</tbody></table>`;
            document.getElementById("content").innerHTML = table_content;
        }
    };
    xhttp.open("GET", "/managers/ShowHotSpotVenue", true);
    xhttp.send();
}

//Show_my_venue.html
function Manager_jumpto_Venue_CreateNew(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
             document.getElementById("content").innerHTML = this.responseText;
            return;
        }
    };
    xhttp.open("GET", "/managers/jumpto_Venue_CreateNew", true);
    xhttp.send();
}

//CreateVenue.html
function Manager_createVenue() {
    var Venue_Name = document.getElementById("Venue Name").value;
    var Longtitude = document.getElementById("Longtitude").value;
    var Latitude = document.getElementById("Latitude").value;
    var Country = document.getElementById("Country").value;
    var State = document.getElementById("State").value;
    var City = document.getElementById("City").value;
    var Suburb = document.getElementById("Suburb").value;
    var Address = document.getElementById("Address").value;
    var hotspot = document.getElementById("hotspot").value;

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/managers/createVenue", true);
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
        hotspot: hotspot
    }));
}

//manage_venue.html
function Manager_jumpto_Venue_edit(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("content").innerHTML = this.responseText;
            return;
        }
    };
    xhttp.open("GET", "/managers/jumpto_Venue_edit", true);
    xhttp.send();
}

function Manager_editVenue(){
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
    xhttp.open("POST", "/managers/editVenue", true);
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

function Manager_ViewCheckInHistory(){
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
    xhttp.open("POST", "/managers/ViewCheckInHistory", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({id: v_id}));
}

function Manager_Edit_venue(){
    var table_content =
        `<th>User ID</th>
        <th>Venue name</th>
        <th>Arrival time</th>`;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            /*document.getElementById("output").innerText = this.responseText;*/
            var infor_collection = JSON.parse(this.responseText);
            //console.log(infor_collection);
            for(x in infor_collection){
                var userID = infor_collection[x].userID;
                var venue_name = infor_collection[x].venue_name;
                var arrival_time = infor_collection[x].arrival_time;
                table_content = table_content+
                `
                <tr>
                <td>${userID}</td>
                <td>${venue_name}</td>
                <td>${arrival_time}</td>
                </tr>
                `;
            }
            document.getElementById("venue_history").innerHTML = table_content;
        }
    };
    xhttp.open("POST", "user/getVenueHistory", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}

