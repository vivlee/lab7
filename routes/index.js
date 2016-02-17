var projects = require('../projects.json');

/*
 * GET home page.
 */

 exports.viewGrid = function(req, res){
 	projects["grid"] = true;
 	res.render('index', projects);
 };

 exports.view = function(req, res){
 	projects["grid"] = false; 
 	res.render('index', projects);
 };