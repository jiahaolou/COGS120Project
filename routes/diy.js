var meals = require('../public/json/diy1meals.json');
/*
 * GET DIY page.
 */

exports.view = function(req, res) {
  console.log("exports.view called inside diy.js");
  meals['viewAlt'] = false;
  res.render('diy');
};


exports.viewAlt = function(req, res) {
  console.log("exports.viewAlt called inside diy.js");
  meals['viewAlt'] = true;
  res.render('diyAlt');
};