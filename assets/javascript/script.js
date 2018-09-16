// get info from the search bar I add
// When a term is searched add a button to the page with searched term assinged to it.
// create an array of topics and put it in a var called "topics".

var topics = ['cats', 'music', 'food', 'travel', 'cars', 'funny'];

function buttons() {
    $('.buttons').empty();

    for (var i = 0; i < topics.length; i++) {

        var button = $('<button>');

        button.addClass('topic');
        button.attr('topic-name', topics[i]);
        button.text(topics[i]);

        $('.buttons').append(button);
    }
}


buttons();

$('.btn').on('click', function (event) {
    event.preventDefault();

    var topic = $('.bar').val().trim();

    topics.push(topic);
    console.log(topic);


    if (topic !== '') {
        buttons();
    }

    $('.bar').val('');

});

$(document).on('click',
    '.topic',
    function () {
        var gif = $(this).attr('topic-name');
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            gif + "&api_key=dc6zaTOxFJmzC&limit=10";
        console.log(gif);
        console.log($('.bar'));

        // var state = $(this).attr('data-state');

        // if (state ===)



        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(queryURL);
            console.log(response);

            var image = response.data;

            for (var i = 0; i < image.length; i++) {
                var gifDiv = $("<div>");

                var gifRating = $("<p>").text("Rating: " + image[i].rating);

                var gifImage = $("<img>");

                gifImage.attr("src", image[i].images.fixed_height.url);

                gifDiv.append(gifImage);
                gifDiv.append(gifRating);

                $(".gifs").prepend(gifDiv);

            }





        });
    });