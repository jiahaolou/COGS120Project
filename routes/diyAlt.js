/*
 * GET DIY Alt page.
 */

exports.view = function(req, res){
  console.log("exports.view called inside diyAlt.js");
  res.render('diyAlt');
};