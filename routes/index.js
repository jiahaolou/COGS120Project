
/*
 * GET home page.
 */

exports.view = function(req, res){
	console.log("exports.view called inside index.js");
  res.render('index');
};