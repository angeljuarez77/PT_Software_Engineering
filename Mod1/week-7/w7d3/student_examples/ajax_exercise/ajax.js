const movieUrl = "http://www.omdbapi.com/?apikey=53aa2cd6&t="
const someWrongUrl = "http://www.omdbapi.com/?apikey=53aa2c&t=Frozen"
const people = "http://myapi-profstream.herokuapp.com/api/dab775/persons";
const govUrl = "https://data.cityofnewyork.us/resource/erm2-nwe9.json";

// $(() => {
//     $('form').submit((event) => {
//         event.preventDefault();
//         const userInput = $('input[type="text"]').val();
//         // console.log(userInput);
//         // console.log('test');
//
//         $.ajax({
//             url: movieUrl + userInput,
//             success: (someData) => {
//                 $('#title').html(someData.Title);
//                 $('#year').html(someData.Year);
//                 $('#rated').html(someData.Rated);
//             },
//             error: () => {
//                 console.error("BAD REQUEST");
//             }
//         });
//
//     });
// });

// onsubmit (this is the event)
//  I have to get the number that was tuyped out in input field
//  I have to acknowledge which button was pressed
//  When we fire an event. We coudl see exactly which element was presssed
//      event.target === this will be the element that triggered the event
//      event.target.id === borough
// render information
$( () => {
        // in order to get the number that was given in the input field
        // we first select to input field
        $('.borough').click( e => {
            e.preventDefault();
            const numberOfComplaints = $('#input-field').val();
            // console.log(e.target.id);
            $.ajax({
                url: govUrl,
                type: "GET",
                data: {
                "$limit" : parseInt(numberOfComplaints),
                "$$app_token" : "ttsdjikrNfXdgqAJw8HrRlXxR"
                },
                success: data => {
                    console.log(data, "information");
                },
                error: err => {
                    console.log(err, "It failed");
                },
            })
        });
});