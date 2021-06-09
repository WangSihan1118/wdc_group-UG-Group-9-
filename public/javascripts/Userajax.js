function User_getUserInfor(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "/users/getUserInfor", true);
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
    xhttp.send();
}

//change_my_infor.html
function User_updateInfor() {
    var first_name = document.getElementById("First name").value;
    var last_name = document.getElementById("Last name").value;
    var number = document.getElementById("Phone number").value;
    var Email = document.getElementById("Email").value;
    var address = document.getElementById("Home address").value;
    var health = document.getElementById("state of health").value;


    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/users/updateInfor", true);
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

//view_my_trip.html
function User_getAllTripHistory(){
    var table_content = 
        `<th>User ID</th>
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
            document.getElementById("trip_table").innerHTML = table_content;
        }
    };
    xhttp.open("GET", "/users/getTrips", true);
    xhttp.send();
}

function User_getHotSpot(){
    var table_content = 
        `<th>User ID</th>
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
            document.getElementById("trip_table").innerHTML = table_content;
        }
    };
    xhttp.open("GET", "/users/getHotspots", true);
    xhttp.send();
}
