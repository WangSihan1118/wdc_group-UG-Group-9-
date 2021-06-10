function getCheckedValue(name){
    var val_arr = document.getElementsByName(name);
    var checked_val;
    for(var i = 0; i < val_arr.length; i++){
        if(val_arr[i].checked){
            checked_val = val_arr[i].value;
        }
    }
    return checked_val;
}

function login(){
    var ID = document.getElementById("ID").value;
    var pwd = document.getElementById("pwd").value;
    var login_type = getCheckedValue("AccountType");
    

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if(JSON.parse(this.responseText).result){
                window.location.href="account.html";
            }else{
                alert("Failed");
            }
            return;
        }
    };
    xhttp.open("POST", "/login", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({ 
        ID:ID,
        pwd:pwd,
        login_type:login_type
    }));
}

function register(){
    var number = document.getElementById("number").value;
    var pwd = document.getElementById("pwd").value;
    var dpwd = document.getElementById("dpwd").value;
    var r_type = getCheckedValue("AccountType");
    
    if(pwd!=dpwd){
        alert("Please check your password!");
        return;
    }
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if(JSON.parse(this.responseText)){
                var a_id = JSON.parse(this.responseText)[0].ID;
                alert("Your ID is " + a_id);
                window.location.href="login.html";
            }else{
                alert("Failed");
            }
            return;
        }
    };
    xhttp.open("POST", "/register", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({ 
        number:number,
        pwd:pwd,
        r_type:r_type
    }));
}

function checkin(){
    var ck = document.getElementById("checkin_input").value;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if(this.responseText){
                alert("Check in successfully!");
            }
            return;
        }
    };
    xhttp.open("POST", "/checkin", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({ 
        ck:ck
    }));
}

