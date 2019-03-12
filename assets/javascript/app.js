$(document).ready(function () {
    function hiding() {
        console.log('test');
        $('#happy').hide();
        $('#excited').hide();
        $('#bored').hide();
        $('#fear').hide();
        $('#sad').hide();
        $('#angry').hide();
        $('#sarcasm').hide();
    }
    hiding();
    

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
    
     $("#submitButton").on("click",function(event){
        event.preventDefault();
        var userInput = $("#userInput").val().trim();
        var queryURL = "https://apis.paralleldots.com/v3/emotion?text=" + userInput + "&api_key=XHEmlBGDQ6f880Y8TmdJFizVECdu2hUo7sGZWbzbfhQ"
    
        $.ajax({
            url: queryURL,
            method: "POST"
        }).then(function(response){
            console.log(response);
            var emotion = response.emotion.emotion;
            $("#moodOutput").text(emotion);
            // Put Spotify Conditionals here
            if(emotion === "Fear"){
                $('#fear').show(); 
            }
            else if (emotion === "Happy"){
                $('#happy').show(); 
            }
            else if (emotion === "Excited") {
                $('#excited').show(); 
            } 
            else if (emotion === "Bored") {
                $('#bored').show(); 
            } 
            else if (emotion === "Sad") {
                $('#sad').show(); 
            } 
            else if (emotion === "Sarcasm") {
                $('#sarcasm').show(); 
            } 
            else  {
                $('#angry').show(); 
            } 
        })
        $("#userInput").val("");
    });

});