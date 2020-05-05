$(function() {
    $(".create-form").on("submit", function(event){
        event.preventDefault();

        var newBurger = {
            name: $("#burger").val().trim(),
            eaten: '0'
        };
        console.log(newBurger)

        // Sends the POST request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");
                // Reloads the page and updates list
                location.reload();
            }
        );
    });

    $(".eat").on("click", function(event){
        var id = $(this).data("id");
        var newEaten = $(this).data("neweaten") === false;

        var newEatenState = {
            eaten: newEaten
        };
        console.log('id:' + id)
        console.log('eaten:' + newEatenState.eaten)

        // Sends PUT Request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatenState
        }).then(
            function() {
                console.log("changed eaten state to", newEaten);
                location.reload();
            }
        );
    });


})