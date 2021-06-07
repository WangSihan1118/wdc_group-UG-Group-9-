//admin_change_my_infor.html
function Admin_updateAdminInfor() {
    var name = document.getElementById("First name").value;
    var number = document.getElementById("Phone number").value;
    var Email = document.getElementById("Email").value;
    var address = document.getElementById("Home address").value;

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/admins/Admin_updateAdminInfor", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({ 
        name: name, 
        number: number,
        Email: Email,
        address: address,
    }));
}

//RegisterAdmin.html
function Admin_signinAdmin() {
    var email = document.getElementById("email").value;
    var pwd = document.getElementById("password").value;
    var dpwd = document.getElementById("double_check").value;

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/admins/updateUserInfor", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({ 
        email:email,
        pwd:pwd,
    }));
}

//Manager User
function Jumpto_Admin_manage_user(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "/admins/Admin_Manage_user", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({ 

    }));
}

function Jumpto_Admin_View_user_trip_history(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "/admins/Admin_view_user_trip", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({ 
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