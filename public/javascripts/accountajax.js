function addactor() {
    var first_name = document.getElementById("actor-first-name").value;
    var last_name = document.getElementById("actor-last-name").value;
    
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/addactor", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({ first_name: first_name, last_name: last_name }));
}