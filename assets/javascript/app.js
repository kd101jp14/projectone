$(document).ready(function () {

    var userInput = $("#userInput").val().trim();

    var queryURL = "https://apis.paralleldots.com/v3/emotion?" + "text=" + userInput + "&api_key=XHEmlBGDQ6f880Y8TmdJFizVECdu2hUo7sGZWbzbfhQ"

    $("#submitButton").on("click", function () {

        $("#moodOutput").empty();
        $("#playlistOutput").empty();

        $.ajax({
            url: queryURL,
            method: "POST"
        }).then(function (response) {
            console.log(response);
            console.log(response.emotion.emotion);

            var emotionResponse = response.emotion.emotion;

            $("#journalEntry").prepend("<hr>");
            $("#journalEntry").prepend(userInput);
            $("#moodOutput").append("<p>" + emotionResponse + "</p>");
            $("#playlistOutput").append("<div>").addClass("playlistHolder");
           
            if (response.emotion.emotion === "Angry") {
                // Add appropriate playlist.
                $("playlistHolder").append()
            }
            if (response.emotion.emotion === "Bored") {
               // Add appropriate playlist.
                $("playlistHolder").append()
            }
            if (response.emotion.emotion === "Excited") {
               // Add appropriate playlist.
                $("playlistHolder").append()
            }
            if (response.emotion.emotion === "Fear") {
               // Add appropriate playlist.
                $("playlistHolder").append()
            }
            if (response.emotion.emotion === "Happy") {
               // Add appropriate playlist.
                $("playlistHolder").append()
            }
            if (response.emotion.emotion === "Sad") {
               // Add appropriate playlist.
                $("playlistHolder").append()
            };
            $("#userInput").val("");

        }).fail(function (jqXHR, textStatus, errorThrown) {
            console.error(errorThrown);
        });
    });
});