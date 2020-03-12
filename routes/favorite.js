
/*
 * GET Blank page.
 */

// var fs = require('fs');
var meals = require('../public/json/meals.json');


exports.view = function(req, res){
  console.log("exports.view called inside favorite.js");
  res.render('favorite', {
      'favorites': [
        { 
          'Title': 'Chicken with Ginger Pesto',
          'Image': 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F718232.jpg&w=596&h=596&c=sc&poi=face&q=85',
          'id': 1
        },
        { 	
          'Title': 'Basic Scrambled Eggs',
          'Image': 'https://x9wsr1khhgk5pxnq1f1r8kye-wpengine.netdna-ssl.com/wp-content/uploads/Scrambled-with-Milk-930x620.jpg',
          'id': 2
        },
        {
          'Title': 'Kadai Chicken',
          'Image': 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F3531190.jpg&w=596&h=596&c=sc&poi=face&q=85',
          'id': 3
        },
        {
          'Title': '15 Minute Chicken Pasta',
          'Image': 'https://i2.wp.com/gimmedelicious.com/wp-content/uploads/2019/12/15-Minute-Chicken-Pasta-3.jpg',
          'id': 4
        },
        {
          'Title': 'Roasted Salmon with Kale-Quinoa Salad',
          'Image': 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Froasted-salmon-kale-quinoa-salad.jpg',
          'id': 5
        },
        {   
            'Title': 'Beef Pepper Steak',
            'Image': 'https://369t7u43n93dgc5pt43uc681-wpengine.netdna-ssl.com/wp-content/uploads/2019/11/beef-pepper-steak-2.jpg',
            'id': 6
         },
         {
            'Title': 'Caribbean Rice and Beans',
            'Image': 'https://369t7u43n93dgc5pt43uc681-wpengine.netdna-ssl.com/wp-content/uploads/2019/09/caribbean-rice-beans-shrimp-3.jpg',
            'id': 7
          },
          {
            'Title': 'Smoked Salmon Brown Rice Bowl',
            'Image': 'https://369t7u43n93dgc5pt43uc681-wpengine.netdna-ssl.com/wp-content/uploads/2018/02/DSC06516-5.jpg',
            'id': 8
          },
          {
            'Title': 'Yogurt Chicken Kebabs',
            'Image': 'https://369t7u43n93dgc5pt43uc681-wpengine.netdna-ssl.com/wp-content/uploads/2018/09/yoplait-yogurt-recipes-6.jpg',
            'id': 9
          },
        { 
          'Title': 'Chicken with Ginger Pesto',
          'Image': 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F718232.jpg&w=596&h=596&c=sc&poi=face&q=85',
          'id': 10
        },
        {
          'Title': '15 Minute Chicken Pasta',
          'Image': 'https://i2.wp.com/gimmedelicious.com/wp-content/uploads/2019/12/15-Minute-Chicken-Pasta-3.jpg',
          'id': 11
        },
        {
          'Title': 'Roasted Salmon with Kale-Quinoa Salad',
          'Image': 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Froasted-salmon-kale-quinoa-salad.jpg',
          'id': 12
        },
        {
          'Title': 'Protein Packed Vegan Breakfast Burrito',
          'Image': 'http://www.nutritionalfoodie.com/wp-content/uploads/2017/01/protein-packed-vegan-breakfast-burrito-4.jpg',
          'id': 13
        }
      ]
    });
}


exports.favoritemealInfo = function(request, response) {
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