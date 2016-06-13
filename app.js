$(document).ready(function() {
var newAnimals = ['cat', 'dog', 'bird'];

$(document).on('click', '.animalz', function() {
          var animal = $(this).attr('data-animal');
          var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10";

          $.ajax({
                  url: queryURL,
                  method: 'GET'
              })
              .done(function(response) {
                  console.log(response)
                  var results = response.data;

                  for(var i = 0; i < results.length; i++) {  
                    var animalDiv = $('<div>');
                    var p = $('<p>');
                    console.log(results[i].rating);
                    p.text(results[i].rating);

                    var animalImage = $('<img>');
                    animalImage.attr('src', results[i].images.fixed_height_downsampled.url);

                    animalDiv.append(p);

                    animalDiv.append(animalImage);

                    $('#gifsAppearHere').prepend(animalDiv); 
                  }
              });
             return false; 
      });

      // Displays animal data
      function DisplayAnimals() {

      $('#addButton').empty();

        for(var i = 0; i < newAnimals.length; i++){
          var addNode = $('<button>');

            addNode.addClass('animalz');
            addNode.attr('data-animal', newAnimals[i]);
            addNode.text(newAnimals[i]);
            $('#addButton').append(addNode);

          }
        }

        DisplayAnimals();

      $('#searchBtn').on('click', function() {
        var aniArray = $('#findAnimal').val().trim();
        newAnimals.push(aniArray);
        console.log(aniArray);
        DisplayAnimals();
        // renderButtons();
        
        return false;
      }); 
       // renderButtons();   
 }); 