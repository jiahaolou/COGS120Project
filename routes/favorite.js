
/*
 * GET Blank page.
 */


exports.view = function(req, res){
  console.log("exports.view called inside favorite.js");
  res.render('favorite');
};
