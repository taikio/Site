
/*
 * GET home page.
 */
(function(){
	'use strict';

	module.exports.index = function(req, res){
		res.render('index', { title: 'Express' })
	};

	module.exports.solucoes = function(req, res, next) {
		res.render('solucoes');
	};

	module.exports.empresa = function(req, res, next) {
		res.render('empresa');
	};

	module.exports.contatos = function(req, res, next) {
		res.render('contatos');
	}

})();


