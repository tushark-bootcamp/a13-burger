// Function to devour the burger.
$(function () {
    $(".btn-devour").on("click", function (event) {
        var id = $(this).data("id");
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",

        }).then(
            function () {
                console.log("changed status to devoured in the controller");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    // Add new burger on submit
    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            name: $("#wish-burg").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("Added new burger in wish list");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});