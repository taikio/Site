
/**
 * Module dependencies.
 */
 (function(){
    'use strict';

    var express = require('express');
    var routes = require('./routes');

    var bodyParser = require('body-parser');
    var app = module.exports = express();
    const IP = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
    const PORT = process.env.OPENSHIFT_NODEJS_PORT || 8080;

// Configuration


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
        
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

//app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));


// Routes

app.get('/', routes.index);
app.get('/solucoes', routes.solucoes);
app.get('/empresa', routes.empresa);
app.get('/contatos', routes.contatos);

app.listen(PORT, IP, function () {
  console.log( "Listening on " + IP + ", server_port " + PORT);
});


})();
