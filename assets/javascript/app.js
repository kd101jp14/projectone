var zomatoAPI = "f191d89df42245690eb81a84e0480aa6";
var userCity = "Nashville";
var zomatoRestaurant = "https://developers.zomato.com/api/v2.1/search?entity_type=city&entity_id=1138&count=3";
var proxyURL = "https://cors-anywhere.herokuapp.com/"

$.ajax({
    url: proxyURL + zomatoRestaurant,
    method: "GET",
    headers: {user_key: zomatoAPI}
}).then(function(response){
    console.log(response);
});







