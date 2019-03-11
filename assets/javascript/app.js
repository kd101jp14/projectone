$(document).ready(function () {

    var userInput = $("#userInput").val();

    var queryURL = "https://apis.paralleldots.com/v3/emotion?" + "text=" + userInput + "&api_key=XHEmlBGDQ6f880Y8TmdJFizVECdu2hUo7sGZWbzbfhQ"
    
    $("#submitButton").on("click", function (event) {

        $("#moodOutput").empty();
        $("#playlistOutput").empty();
        $("playlistHolder").empty();

        $.ajax({
            url: queryURL,
            method: "POST"
        }).then(function (response) {
            var emotionResponse = response.emotion.emotion;
            
            console.log(response);
            console.log(emotionResponse);

            $("#moodOutput").append("<p>" + emotionResponse + "</p>");
            $("#playlistOutput").append("<div>").addClass("playlistHolder");
            $("#journalEntry").prepend("<hr>");
            $("#journalEntry").prepend(userInput);
           
            if (emotionResponse === "Angry") {
                // Add appropriate playlist.
                $("playlistHolder").append();
            }
            if (emotionResponse === "Bored") {
               // Add appropriate playlist.
                $("playlistHolder").append();
            }
            if (emotionResponse === "Excited") {
               // Add appropriate playlist.
                $("playlistHolder").append();
            }
            if (emotionResponse === "Fear") {
               // Add appropriate playlist.
                $("playlistHolder").append();
            }
            if (emotionResponse === "Happy") {
               // Add appropriate playlist.
                $("playlistHolder").append();
            }
            if (emotionResponse === "Sad") {
               // Add appropriate playlist.
                $("playlistHolder").append();
            };
            $("#userInput").val("");

        }).fail(function (jqXHR, textStatus, errorThrown) {
            console.error(jqXHR, textStatus, errorThrown);
        });
    });
});