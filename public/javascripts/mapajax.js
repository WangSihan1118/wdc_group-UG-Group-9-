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