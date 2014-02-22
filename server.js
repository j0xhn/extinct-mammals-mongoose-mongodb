var mongoose = require('mongoose'),
    express = require('express'),
    app = express();

mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log('db created');
  // yay!
});

app.use(express.bodyParser());

app.listen(8888);