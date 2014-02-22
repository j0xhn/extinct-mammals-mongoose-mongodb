//requires express and mongoos
var mongoose = require('mongoose'),
    express = require('express'),
    app = express();

//init express and connects it to the server
app.use(express.bodyParser());
app.use(express.urlencoded());
app.use(express.json());
mongoose.connect('mongodb://localhost/test');

//starts database
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log('db created and running');
  // yay!
});

//requires api and connects it to desired exports
var api = require('./api.js');
// app.get('/', api.get);
app.post('/mammals', api.post);

app.listen(8888);
module.exports = app;
