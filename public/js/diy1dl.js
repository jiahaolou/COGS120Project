'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();	
	filterItems();
	console.log("done runnin");

})

function filterItems() {
	// See which items should be displayed
	var maxCal = localStorage.getItem("maxCal");
	var maxTime = localStorage.getItem("maxTime");
	var minCal = localStorage.getItem("minCal");
	var minTime = localStorage.getItem("minTime");
	// var i = 0;

	Promise.resolve(getMeal(1, minTime, minCal, maxTime, maxCal)).then(function(value) {
		  console.log(value); // "Success";
		});

	Promise.resolve(getMeal(2, minTime, minCal, maxTime, maxCal)).then(function(value) {
		  console.log(value); // "Success";
		});

	Promise.resolve(getMeal(3, minTime, minCal, maxTime, maxCal)).then(function(value) {
		  console.log(value); // "Success";
		});

	Promise.resolve(getMeal(4, minTime, minCal, maxTime, maxCal)).then(function(value) {
		  console.log(value); // "Success";
		});

	Promise.resolve(getMeal(5, minTime, minCal, maxTime, maxCal)).then(function(value) {
		  console.log(value); // "Success";
		});

	Promise.resolve(getMeal(6, minTime, minCal, maxTime, maxCal)).then(function(value) {
		  console.log(value); // "Success";
		});

	Promise.resolve(getMeal(7, minTime, minCal, maxTime, maxCal)).then(function(value) {
		  console.log(value); // "Success";
		});

	Promise.resolve(getMeal(8, minTime, minCal, maxTime, maxCal)).then(function(value) {
		  console.log(value); // "Success";
		});

	Promise.resolve(getMeal(9, minTime, minCal, maxTime, maxCal)).then(function(value) {
		  console.log(value); // "Success";
		});

	Promise.resolve(getMeal(10, minTime, minCal, maxTime, maxCal)).then(function(value) {
		  console.log(value); // "Success";
		});
	
	// var res;
	// for (var i = 1; i < 11; i++) {
	// 	console.log(i);
		
	// }
}

function getMeal(index, minTime, minCal, maxTime, maxCal) {
	var cals;
	var time;
	$.get("/meal/"+index, null, function(res) {
		cals = res.Calories;
		time = res.Time;
		console.log("time " + time);
		console.log("cals " + cals);
		if ((time > maxTime) || (cals > maxCal) || (cals < minCal)) {
			hideElement(index);
		}
		console.log("returning:  " + index+1);
		return index+1;
	});
}

function hideElement(index) {
	console.log("should be hiding " + index);
	$("#diy-"+index).css("display", "none");
}


/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.meal a').click(addRecipeDetails);
	$(":button").click(addFavorite);
	$('#searchagain').click(resetSearch);
	

	// $('#colorBtn').click(randomizeColors);
}

function resetSearch() {
	localStorage.removeItem("minCal");
	localStorage.removeItem("maxCal");
	localStorage.removeItem("minTime");
	localStorage.removeItem("maxTime");
	console.log("resetting");
	console.log("resetting");
	window.location = "diy";
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
	var diy1mealID = $(this).closest('.meal').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = diy1mealID.substr('diy-'.length);

	$.get("/meal/" + idNumber, callBackFn);

    console.log("User clicked on recipe " + idNumber);
}

function callBackFn(result) {
	console.log(result);
	var selector = '#diy-' + result.id + ' .details';
	var mealHTML = '<p>Time: '+result.Time+' minutes</p>'+
        '<p>Calories: '+result.Calories+'</p>'+
        '<p>Protein: '+result.Protein+' grams</p>'+
        '<p>Ingredients: '+result.Ingredients+'</p>'+
		'<p>Summary: '+result.Summary+'</p>';

	$(selector).html(mealHTML);
}