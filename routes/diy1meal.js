var diy1meals = require('../public/json/meals.json');

exports.diy1mealInfo = function(request, response) {
	var diy1mealID = request.params.id;
	if (diy1mealID == "random") {
		diy1mealID = Math.floor(Math.random() * diy1meals.length) + 1;
	} else {
		diy1mealID = parseInt(diy1mealID);
	}

  	var diy1meal = diy1meals[diy1mealID-1]; // of by one, our first meal has index 0
  	response.json(diy1meal);
}