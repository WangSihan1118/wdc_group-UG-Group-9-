function jump_to_change_my_infor(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 403){
            alert("Not Authorized");
        }
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("content_area").innerHTML = this.responseText;
            User_getUserInfor();
            return;
        }
    };
    xhttp.open("GET", "/accounts/jump_to_change_my_infor", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}
function jump_to_view_my_trip(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 403){
            alert("Not Authorized");
        }
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("content_area").innerHTML = this.responseText;
            return;
        }
    };
    xhttp.open("GET", "/accounts/jump_to_view_my_trip", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}
function jump_to_Edit_Venue_manager_information(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 403){
            alert("Not Authorized");
        }
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("content_area").innerHTML = this.responseText;
            Manager_getManagerInfor();
            return;
        }
    };
    xhttp.open("GET", "/accounts/jump_to_Edit_Venue_manager_information", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}
function jump_to_Show_my_venue(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 403){
            alert("Not Authorized");
        }
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("content_area").innerHTML = this.responseText;
            return;
        }
    };
    xhttp.open("GET", "/accounts/jump_to_Show_my_venue", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}
function jump_to_admin_change_my_infor(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 403){
            alert("Not Authorized");
        }
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("content_area").innerHTML = this.responseText;
            Admin_getAdminInfor();
            return;
        }
    };
    xhttp.open("GET", "/accounts/jump_to_admin_change_my_infor", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}
function jump_to_RegisterAdmin(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 403){
            alert("Not Authorized");
        }
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("content_area").innerHTML = this.responseText;
            return;
        }
    };
    xhttp.open("GET", "/accounts/jump_to_RegisterAdmin", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}
function jump_to_admin_manage_user(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 403){
            alert("Not Authorized");
        }
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("content_area").innerHTML = this.responseText;
            return;
        }
    };
    xhttp.open("GET", "/accounts/jump_to_admin_manage_user", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}
function jump_to_admin_manage_venue(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 403){
            alert("Not Authorized");
        }
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("content_area").innerHTML = this.responseText;
            return;
        }
    };
    xhttp.open("GET", "/accounts/jump_to_admin_manage_venue", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}