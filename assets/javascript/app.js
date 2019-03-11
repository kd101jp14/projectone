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