$(document).ready(function (event) {
    // Clear out the restaurant on the page
    $('#restaurantOutput').empty();

// Set variables for Zomato API
var zomatoAPI = '860bb9e7102399d838e0fc892c4ec9b5';
var userCity = 'Nashville';
var zomatoRestaurant =
    'https://developers.zomato.com/api/v2.1/search?entity_type=city&entity_id=1138';
var proxyURL = 'https://cors-anywhere.herokuapp.com/';


// Initialize Firebase
var config = {
    apiKey: 'AIzaSyDOwSgSbAXSZcTG7tvCXZC4bZgIp0XfF04',
    authDomain: 'group-project-1-d123e.firebaseapp.com',
    databaseURL: 'https://group-project-1-d123e.firebaseio.com',
    projectId: 'group-project-1-d123e',
    storageBucket: 'group-project-1-d123e.appspot.com',
    messagingSenderId: '814303976551'
};

firebase.initializeApp(config);

var database = firebase.database();

$('#submitButton').on('click', function (event) {
    // Prevent button from preventing form
    event.preventDefault();

    // Store user input as a variable
    var userInput = $('#userInput')
        .val()
        .trim();

    // Concatenate query URl with user input and necessary parameters
    var queryURL =
        'https://apis.paralleldots.com/v3/emotion?text=' +
        userInput +
        '&api_key=XHEmlBGDQ6f880Y8TmdJFizVECdu2hUo7sGZWbzbfhQ';

    //Make AJAX Request
    $.ajax({
            url: queryURL,
            method: 'POST'
        })
        .then(function (response) {
            // Log emotion from the response
            var emotion = response.emotion.emotion;
            console.log(emotion);

            // Determine when to display each playlist
            if (emotion === 'Happy') {
                $('#mood').attr('hidden', false);
                $('#mood').attr(
                    'src',
                    'https://open.spotify.com/embed/user/vody62sqm15qnn28g2efwk4r0/playlist/6DqjLBNmHwCZi64j9Dw4GU" width="300"'
                );
            } else if (emotion === 'Sad') {
                $('#mood').attr('hidden', false);
                $('#mood').attr(
                    'src',
                    'https://open.spotify.com/embed/user/vody62sqm15qnn28g2efwk4r0/playlist/2xSba5dBzk5Z3vrJTSVnOF" width="300"'
                );
            } else if (emotion === 'Angry') {
                $('#mood').attr('hidden', false);
                $('#mood').attr(
                    'src',
                    'https://open.spotify.com/embed/user/vody62sqm15qnn28g2efwk4r0/playlist/1JQsHRdkIgoke330hZ4l0t" width="300"'
                );
            } else if (emotion === 'Sarcasm') {
                $('#mood').attr('hidden', false);
                $('#mood').attr(
                    'src',
                    'https://open.spotify.com/embed/user/vody62sqm15qnn28g2efwk4r0/playlist/08V5N2ioq0duf0dJEWXsq2" width="300"'
                );
            } else if (emotion === 'Fear') {
                $('#mood').attr('hidden', false);
                $('#mood').attr(
                    'src',
                    'https://open.spotify.com/embed/user/vody62sqm15qnn28g2efwk4r0/playlist/3AUeMGIbrN67A6yrhSgeL8" width="300"'
                );
            } else if (emotion === 'Bored') {
                $('#mood').attr('hidden', false);
                $('#mood').attr(
                    'src',
                    'https://open.spotify.com/embed/user/vody62sqm15qnn28g2efwk4r0/playlist/5e0f4mXyVtL16V2UXYS68X" width="300"'
                );
            } else if (emotion === 'Excited') {
                $('#mood').attr('hidden', false);
                $('#mood').attr(
                    'src',
                    'https://open.spotify.com/embed/user/vody62sqm15qnn28g2efwk4r0/playlist/2d1a9qSU1JCkA3OALPL5DN" width="300"'
                );
            }

            // Capture and format the date and time of the user's input.
            var thisDate = new Date();
            var format = 'LLLL';
            var time = moment(thisDate).format(format);
            var journalEntry = '<br>' + time + ': ' + userInput + '<br>';

            // Keys and values for Firebase database
            var persisting = {
                emotion: emotion,
                journalEntry: journalEntry
            };

            // Push keys and values to database.
            database.ref().push(persisting);

            // Clear out input field.
            $('#userInput').val('');
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.error(errorThrown);
        });

    $('#restaurantOutput').empty();

    // Make AJAX request to Zomato API and display a random restaurant from the response
    $.ajax({
        url: proxyURL + zomatoRestaurant,
        method: 'GET',
        headers: {
            user_key: zomatoAPI
        }
    }).then(function (response) {
        var random = Math.floor(Math.random() * 20);
        console.log(response);
        var restaurant = {
            name: response.restaurants[random].restaurant.name,
            menu: response.restaurants[random].restaurant.menu_url
        };
        console.log(restaurant.name);
        console.log(restaurant.menu);
        var restaurantName = $('<a>')
            .text(restaurant.name)
            .attr('href', restaurant.menu);
        $('#restaurantOutput').append(restaurantName);
    });
});
database.ref().on('child_added', function (childSnapshot) {
    // Log changes
    console.log(childSnapshot.val());

    // Save changes as variables
    var emotion = childSnapshot.val().emotion;
    var journalEntry = childSnapshot.val().journalEntry;
    // Prepend all new journal entries on the page
    $('#journalEntry').prepend(journalEntry);
});


});