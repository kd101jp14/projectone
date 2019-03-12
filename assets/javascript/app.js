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







$(document).ready(function () {

    var userInput = $("#userInput").val().trim();

    var queryURL = "https://apis.paralleldots.com/v3/emotion?" + "text=" + userInput + "&api_key=XHEmlBGDQ6f880Y8TmdJFizVECdu2hUo7sGZWbzbfhQ"

    $("#submitButton").on("click", function () {
        console.log("clicked");

        $.ajax({
            url: queryURL,
            method: "POST"
        }).then(function (response) {
            console.log(response);
            console.log("Hi");
        }).fail(function ( jqXHR, textStatus, errorThrown) {
            console.error(errorThrown);
        });
    });

});
