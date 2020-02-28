
/*
 * GET Workout page.
 */
var data = require('../public/json/meals.json');
exports.view = function(req, res){
    res.render('workout', {
        'workouts': [
          { 
            'Title': 'Workout Eggs',
            'Image': 'https://x9wsr1khhgk5pxnq1f1r8kye-wpengine.netdna-ssl.com/wp-content/uploads/Scrambled-with-Milk-930x620.jpg',
            'id': 1
          },
          { 	
            'Title': 'Beef Pepper Steak',
            'Image': 'https://369t7u43n93dgc5pt43uc681-wpengine.netdna-ssl.com/wp-content/uploads/2019/11/beef-pepper-steak-2.jpg',
            'id': 2
          },
          {
            'Title': 'Caribbean Rice and Beans',
            'Image': 'https://369t7u43n93dgc5pt43uc681-wpengine.netdna-ssl.com/wp-content/uploads/2019/09/caribbean-rice-beans-shrimp-3.jpg',
            'id': 3
          },
          {
            'Title': 'Smoked Salmon Brown Rice Bowl',
            'Image': 'https://369t7u43n93dgc5pt43uc681-wpengine.netdna-ssl.com/wp-content/uploads/2018/02/DSC06516-5.jpg',
            'id': 4
          },
          {
            'Title': 'Yogurt Chicken Kebabs',
            'Image': 'https://369t7u43n93dgc5pt43uc681-wpengine.netdna-ssl.com/wp-content/uploads/2018/09/yoplait-yogurt-recipes-6.jpg',
            'id': 5
          }
        ]
    });
  };