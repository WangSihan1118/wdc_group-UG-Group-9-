function check_in()
{
    postdiv = document.getElementById("post");
    postdiv.innerHTML='';

    var name = "Adelaide";
    var time = new Date();
    var userID = "a1810558";
    postdiv.innerHTML += `<tr><td>${userID}</td><td>${name}</td><td>${time}</td></tr>`;
}

function load() {

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            post = JSON.parse(this.responseText);
            check_in();
        }
    };

    xmlhttp.open("GET", "/users/check_in", true);

    xmlhttp.send();

}

window.onload=function(){
    load();
};