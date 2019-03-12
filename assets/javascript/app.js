$(document).ready(function() {
  $("#submitButton").on("click", function(event) {
    event.preventDefault();

    var userInput = $("#userInput")
      .val()
      .trim();

    var queryURL =
      "https://apis.paralleldots.com/v3/emotion?text=" +
      userInput +
      "&api_key=XHEmlBGDQ6f880Y8TmdJFizVECdu2hUo7sGZWbzbfhQ";

    $.ajax({
      url: queryURL,
      method: "POST"
    })
      .then(function(response) {
        var emotion = response.emotion.emotion;
        $("#moodOutput").text(emotion);
        $("#userInput").val("");

        // Put Spotify Conditionals here
      })
      .fail(function(jqXHR, textStatus, errorThrown) {
        console.error(errorThrown);
      });
  });
});
