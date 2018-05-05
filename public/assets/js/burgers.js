// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
	// this button makes the burger devoured
  $(".devour").on("click", function(event) {
    var id = $(this).data("id");

    var nowDevoured = {
      devoured: 1
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: nowDevoured
    }).then(
      function() {
        console.log("changed devoured to true");
        // Reload the page to get the updated list
        location.reload();
      }
    );
	});
	
	// this function makes the burger again
  $(".remake").on("click", function(event) {
    var id = $(this).data("id");

    var nowDevoured = {
      devoured: 0
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: nowDevoured
    }).then(
      function() {
        console.log("changed devoured to false");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

	// This handles the submit button on the create burger form.
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
		console.log('create hit');

    var newBurger = {
      name: $("#burger").val().trim()
    };
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
