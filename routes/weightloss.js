/*
 * GET weight loss page.
 */
var data = require('../public/json/weightlossmeals.json');
exports.view = function(req, res){
    res.render('weightloss', {
      'weightlosses': [
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
        }
      ]
    });
  };