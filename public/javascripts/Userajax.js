//change_my_infor.html
function User_updateInfor() {
    var first_name = document.getElementById("First name").value;
    var last_name = document.getElementById("Last name").value;
    var number = document.getElementById("Phone number").value;
    var Email = document.getElementById("Email").value;
    var address = document.getElementById("Home address").value;
    var health = document.getElementById("state of health").value;


    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/user/updateInfor", true);
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
function User_getTripHIstory(){
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
            document.getElementById("trip_table").innerHTML = table_content;
        }
    };
    xhttp.open("GET", "user/getTrips", true);
    xhttp.send();
}
