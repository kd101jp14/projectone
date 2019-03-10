var clientID = "b01ff2ad9f5042e89990b45e6f1c9187";
var clientSecret = "5441bc50ce404ec78526333a310ae03a";
var authURL = "https://accounts.spotify.com/authorize?client_id="+clientID+"&response_type=token&redirect_uri=https://lukeduran.github.io/projectone/"

$.ajax({
    url: authURL,
    method: "GET"
})
