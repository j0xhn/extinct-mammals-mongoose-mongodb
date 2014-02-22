var mongoose = require('mongoose'),
    express = require('express'),
    app = express();

app.use(express.bodyParser());

mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log('db created and running on server.js');

  // yay!
});

var mammalSchema = new mongoose.Schema(
  {
    name: 'string', 
    type: 'string',
    year_extinct: Number
  }
);

var ExtinctMammal = mongoose.model('ExtinctMammal', mammalSchema);

app.get('/', function(req,res){
  ExtinctMammal.find(function(err, mammals){
    res.send(mammals);
  });

});

app.post('/', function(req,res){
  //create new document and parse out object
  var newMammal = new ExtinctMammal(
    {
        name: req.body.name,
        type: req.body.type,
        year_extinct: req.body.year_extinct
    }
  );
  //save document
  newMammal.save(function(err){
    res.send(newMammal);
  });
});

app.listen(8888);