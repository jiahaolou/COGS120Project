
/*
 * GET landing page.
 */


exports.view = function(req, res){
    console.log("exports.view called inside landing.js");
    res.render('landing');
  };
  