 (document).ready(function() {
 $('button').on('click', function() {
          var animal = $(this).data('animal');
          var newAnimals = ['cat', 'dog', 'bird'];
          var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10";

          $.ajax({
                  url: queryURL,
                  method: 'GET'
              })
              .done(function(response) {
                  console.log(response)
                  var results = response.data;

                  for(var i = 0; i< results.length ; i++){

                  }
                        for(var i = 0; i < result.length; i++) {  
                          var animalDiv = $('<div>');
                          var p = $('<p>');
                          console.log(results[i].rating);
                          p.text(results[i].rating);

                          var animalImage = $('<img>');
                          animalImage.attr('src', results.images_height.url);

                          animalDiv.append(p);

                          animalDiv.append(animalImage);

                          $('#gifsAppearHere').prepend(animalDiv); 
                        }
              });
      });

      // Displays animal data
      function DisplayAnimals() {

        $('#addButton').empty();

        for(var i = 0; i < animal.length; i++){
          var addNode = $('<button>');

            addNode.addClass('anibutton');
            addNode.attr('data-name', newAnimals[i]);
            addNode.text(newAnimals[i]);

            $('$addButton').append(addNode);
          }
        }

      $('#findAnimal').on('click', function() {
        var aniArray = $('#labelz').val().trim();
        newAnimals.push(aniArray);

        renderButtons();
        
        return false;
      }); 
       renderButtons();   
 }); 