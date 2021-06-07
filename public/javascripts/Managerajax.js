//Edit_Venue_manager_information.html
function Manager_updateManagerInfor() {
    var first_name = document.getElementById("First name").value;
    var last_name = document.getElementById("Last name").value;
    var number = document.getElementById("Phone number").value;
    var Email = document.getElementById("Email").value;
    var address = document.getElementById("Home address").value;
    var health = document.getElementById("state of health").value;


    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/managers/updateManagerInfor", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({ 
        first_name: first_name, 
        last_name: last_name,
        number: number,
        Email: Email,
        address: address,
        health: health 
    }));
}

//Show_my_venue.html
function jumpto_Venue_CreateNew(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        }
    };
    xhttp.open("GET", "/managers/createNewVenue", true);
    xhttp.send();
}

//CreateVenue.html
function Manager_createVenue() {
    var Venue_Name = document.getElementById("Venue Name").value;
    var number = document.getElementById("Manager phone number").value;
    var Longtitude = document.getElementById("Longtitude").value;
    var Latitude = document.getElementById("Latitude").value;
    var Country = document.getElementById("Country").value;
    var State = document.getElementById("State").value;
    var City = document.getElementById("City").value;
    var Suburb = document.getElementById("Suburb").value;
    var Address = document.getElementById("Address").value;
    var hotspot = document.getElementById("hotspot").value;

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/user/createVenue", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({ 
        Venue_Name =Venue_Name,
        number = number,
        Longtitude = Longtitude,
        Latitude =Latitude,
        Country = Country,
        State = State,
        City = City,
        Suburb = Suburb,
        Address = Address,
        hotspot = hotspot
    }));
}

//manage_venue.html
function jumpto_Venue_edit(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        
        }
    };
    xhttp.open("GET", "user/editVenue", true);
    xhttp.send();
}

function Manager_updateManagerInfor() {
    var Venue_Name = document.getElementById("Venue Name").value;
    var number = document.getElementById("Manager phone number").value;
    var Longtitude = document.getElementById("Longtitude").value;
    var Latitude = document.getElementById("Latitude").value;
    var Country = document.getElementById("Country").value;
    var State = document.getElementById("State").value;
    var City = document.getElementById("City").value;
    var Suburb = document.getElementById("Suburb").value;
    var Address = document.getElementById("Address").value;
    var hotspot = document.getElementById("hotspot").value;

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/user/editVenue", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({ 
        Venue_Name =Venue_Name,
        number = number,
        Longtitude = Longtitude,
        Latitude =Latitude,
        Country = Country,
        State = State,
        City = City,
        Suburb = Suburb,
        Address = Address,
        hotspot = hotspot
    }));
}
//delete venue
function Manager_updateManagerInfor() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/user/deleteVenue", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({ 

    }));
}

//view_venue_history.html
function jumpto_Venue_checkinhistory(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        
        }
    };
    xhttp.open("GET", "user/getVenueHistory", true);
    xhttp.send();
}

function Manager_Venue_checkinhistory(){
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
    xhttp.send();
}