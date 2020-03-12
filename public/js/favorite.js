'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	var i;
	for (i = 0; i < 6; i++) {
		var elemStyle = localStorage.getItem("favorite-"+i);
		if (elemStyle == null) {	
	  		$("#favorite-"+i).css("display", "none");
	  	} else {
			$("#favorite-"+i).css("display", elemStyle);
	  	}
	}
	console.log("ready!");
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.meal a').click(addRecipeDetails);
	$(":button").click(removeFavorite);

}

function removeFavorite() {
	var buttonID = $(this).attr("id");
	var mealID = buttonID.substr('button-'.length);

	localStorage.removeItem("favorite-"+mealID);
	$("#favorite-"+mealID).css("display", "none");


}

// function addFavorite(e) {
// 	e.preventDefault();

// 	var buttonID = $(this).attr("id");
// 	var mealID = buttonID.substr('button-'.length);

// 	console.log("favorite-btn clicked!")
// 	console.log("id = " + mealID)

// 	$("#favorite-"+mealID).css("display", "block");

// }


/*
 * Make an AJAX call to retrieve meal details and add it in
 */
function addRecipeDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var mealID = $(this).closest('.meal').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	// var idNumber = mealID.substr('meal'.length);

	$.get("/favoritemeal/" + mealID, callBackFn);

    console.log("User clicked on recipe " + mealID);
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