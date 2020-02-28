var meals = require('../public/json/meals.json');

exports.mealInfo = function(request, response) {
	var mealID = request.params.id;
	if (mealID == "random") {
		mealID = Math.floor(Math.random() * meals.length) + 1;
	} else {
		mealID = parseInt(mealID);
	}

	// This indexing assumes a json with direct entires but ours has sub dictionaries
	// Can put response.json(meals) to see that the entire file shows up properly
  	var meal = meals[mealID-1]; // of by one, our first meal has index 0
  	response.json(meal);
}