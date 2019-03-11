$(document).ready(function () {

    var userInput = $("#userInput").val().trim();

    var queryURL = "https://apis.paralleldots.com/v3/emotion?" + "text=" + userInput + "&api_key=XHEmlBGDQ6f880Y8TmdJFizVECdu2hUo7sGZWbzbfhQ"

    $("#submitButton").on("click", function (event) {

        event.preventDefault();

        $("#moodOutput").empty();
        $("#playlistOutput").empty();

        $.ajax({
            url: queryURL,
            method: "POST"
        }).then(function (response) {
            console.log(response);
            console.log(response.emotion.emotion);

            if (response.emotion.emotion === "Angry") {
                $("#moodOutput").append("<p>Angry</p>");
                $("#playlistOutput").append();
            }
            if (response.emotion.emotion === "Bored") {
                $("#moodOutput").append("<p>Bored</p>");
                $("#playlistOutput").append();
            }
            if (response.emotion.emotion === "Excited") {
                $("#moodOutput").append("<p>Excited</p>");
                $("#playlistOutput").append();
            }
            if (response.emotion.emotion === "Fear") {
                $("#moodOutput").append("<p>Fear</p>");
                $("#playlistOutput").append();
            }
            if (response.emotion.emotion === "Happy") {
                $("#moodOutput").append("<p>Happy</p>");
                $("#playlistOutput").append();
            }
            if (response.emotion.emotion === "Sad") {
                $("#moodOutput").append("<p>Sad</p>");
                $("#playlistOutput").append();
            };
            $("#userInput").val("");

        }).fail(function (jqXHR, textStatus, errorThrown) {
            console.error(errorThrown);
        });
    });
});