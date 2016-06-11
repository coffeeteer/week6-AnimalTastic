$('button').on('click', function() {
        var animal = $(this).data('animal');
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({
                url: queryURL,
                method: 'GET'
            })
            .done(function(response) {
                // step 1: Run this file, click a button, and see what the data looks like in the browser's console. Open up the Object, then open up the data key, then open up 0. Study the keys and how the JSON is structured.

                console.log(response)

                var results = response.data;
                // step 2: since the image information is inside of the data key then make a variable named results and set it equal to response.data
                for(var i = 0; i< results.length ; i++){

                }
                //------------put step 2 in between these dashes--------------------

                //--------------------------------

                //for (var i = 0; i < results.length; i++) {

                    /* step 3: 
                        * uncomment the for loop above and the closing curly bracket below
                        * make a div and reference it in a variable named animalDiv
                        * make a paragraph tag and put it in a variable named p
                            * set the text of the paragraph to the rating of the image in results[i]
                        * make an image and reference it in a variable named animalImage
                        * set the image's src to results[i]'s fixed_height.url 

                        * append the p variable to the animalDiv variable
                        * append the animalImage variable to the animalDiv variable

                        * prepend the animalDiv variable to the element with an id of gifsAppearHere

                    */

                    //------------put step 3 in between these dashes--------------------
                        var animalDiv = $('<div>');
                        var p = $('<p>');
                        console.log(results[i].rating);
                        p.text(results[i].rating);

                        var animalImage = $('<img>');
                        animalImage.attr('src', results.images_height.url);

                        animalDiv.append(p);

                        animalDiv.append(animalImage);

                        $('gifsAppearHere').prepend(animalDiv);
                    //--------------------------------
                //}

            });
    });