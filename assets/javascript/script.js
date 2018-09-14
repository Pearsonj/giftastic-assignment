// get info from the search bar I add
// When a term is searched add a button to the page with searched term assinged to it.
// create an array of topics and put it in a var called "topics".

var topics = ['cats', 'music', 'food', 'travel', 'cars', 'funny'];

function buttons() {
    $('.buttons').empty();

    for (var i = 0; i < topics.length; i++){

        var button = $('<button>');

        button.addClass('topic');
        button.attr('date-name', topics[i]);
        button.text(topics[i]);

        $('.buttons').append(button);
    }
}

$('.btn').on('click', function(event){
    event.preventDefault();

    var topic = $('.bar').val().trim();

    topics.push(topic);

    buttons();
});

buttons();