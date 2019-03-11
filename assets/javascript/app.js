$(document).ready(function () {

    var userInput = $("#userInput").val();

    var queryURL = "https://apis.paralleldots.com/v3/emotion?" + "text=" + userInput + "&api_key=XHEmlBGDQ6f880Y8TmdJFizVECdu2hUo7sGZWbzbfhQ"
    
    $("#submitButton").on("click", function (event) {

        $("#moodOutput").empty();
        $("#playlistOutput").empty();
        $(".playlistHolder").empty();

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
                /// Embed appropriate playlist between plus signs.
                $(".playlistHolder").append("<div> </div>");
            }
            if (emotionResponse === "Bored") {
               // Embed appropriate playlist between plus signs.
                $(".playlistHolder").append("<div>" + + "</div>");
            }
            if (emotionResponse === "Excited") {
               /// Embed appropriate playlist between plus signs.
                $(".playlistHolder").append("<div> </div>");
            }
            if (emotionResponse === "Fear") {
               /// Embed appropriate playlist between plus signs.
                $(".playlistHolder").append("<div> </div>");
            }
            if (emotionResponse === "Happy") {
               /// Embed appropriate playlist between plus signs.
                $(".playlistHolder").append("<div> </div>");
            }
            if (emotionResponse === "Sad") {
               /// Embed appropriate playlist between plus signs.
                $(".playlistHolder").append("<div> </div>");
            };
            $("#userInput").val("");

        }).fail(function (jqXHR, textStatus, errorThrown) {
            console.error(jqXHR, textStatus, errorThrown);
        });
    });
});