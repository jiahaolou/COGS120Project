'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.meal a').click(addRecipeDetails);
	$(":button").click(addFavorite);

	// $('#colorBtn').click(randomizeColors);
}

function addFavorite(e) {
	e.preventDefault();

	var buttonID = $(this).attr("id");
	var mealID = buttonID.substr('button-'.length);

	console.log("favorite-btn clicked!")
	console.log("id = " + mealID)

	localStorage.setItem("favorite-"+mealID, "block");

}


/*
 * Make an AJAX call to retrieve meal details and add it in
 */
function addRecipeDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var weightlossmealID = $(this).closest('.meal').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	// var idNumber = mealID.substr('meal'.length);

	$.get("/weightlossmeal/" + weightlossmealID, callBackFn);

    console.log("User clicked on recipe " + weightlossmealID);
}

function callBackFn(result) {
	console.log(result);
	var selector = '#' + result.id + ' .details';
	var mealHTML = '<p>Time: '+result.Time+' minutes</p>'+
        '<p>Calories: '+result.Calories+'</p>'+
        '<p>Protein: '+result.Protein+' grams</p>'+
        '<p>Ingredients: '+result.Ingredients+'</p>'+
		'<p>Summary: '+result.Summary+'</p>';

	$(selector).html(mealHTML);
}