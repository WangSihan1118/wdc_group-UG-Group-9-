//User
function Jumpto_UserUpdateInfor(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "/user/UserUpdateInfor", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}

function Jumpto_UserViewTrip(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "/user/UserViewTrip", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}

//Manager
function Jumpto_ManagerUpdateInfor(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "/user/ManagerUpdateInfor", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}

function Jumpto_ManagerUpdateVenue(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "/user/ManagerUpdateVenue", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}

//Admin
function Jumpto_AdminUpdateInfor(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "/user/AdminUpdateInfor", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}

function Jumpto_AdminRegister(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "/user/AdminRegister", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}

function Jumpto_AdminManageUser(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "/user/AdminManageUser", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}

function Jumpto_AdminManageVenue(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "/user/AdminManageVenue", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}


