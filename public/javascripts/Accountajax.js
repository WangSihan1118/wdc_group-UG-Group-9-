//User
function Jumpto_UserUpdateInfor(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "/accounts/UserUpdateInfor", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}

function Jumpto_UserViewTrip(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "/accounts/UserViewTrip", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}

//Manager
function Jumpto_ManagerUpdateInfor(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "/accounts/ManagerUpdateInfor", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}

function Jumpto_ManagerUpdateVenue(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "/accounts/ManagerUpdateVenue", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}

//Admin
function Jumpto_AdminUpdateInfor(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "/accounts/AdminUpdateInfor", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}

function Jumpto_AdminRegister(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "/accounts/AdminRegister", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}

function Jumpto_AdminManageUser(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "/accounts/AdminManageUser", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}

function Jumpto_AdminManageVenue(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "/user/AdminManageVenue", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}


