var weightlossmeals = require('../public/json/weightlossmeals.json');

exports.weightlossmealInfo = function(request, response) {
	var weightlossmealID = request.params.id;
	if (weightlossmealID == "random") {
		weightlossmealID = Math.floor(Math.random() * weightlossmeals.length) + 1;
	} else {
		weightlossmealID = parseInt(weightlossmealID);
	}

  	var weightlossmeal = weightlossmeals[weightlossmealID-1]; // of by one, our first meal has index 0
  	response.json(weightlossmeal);
}