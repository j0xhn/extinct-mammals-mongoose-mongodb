var ExtinctMammal = require('./mammal.js');

// var list = ('/mammals', function(req,res){
//   ExtinctMammal.find(function(err, mammals){
//     res.send(mammals);
//   });
// });

var save = ('/mammals', function(req,res){
  //create new document and parse out object

  console.log("ExtinctMammal:" + ExtinctMammal);
 
    var newMammal = new ExtinctMammal(
      {
          name: req.body.name,
          type: req.body.type,
          year_extinct: req.body.year_extinct
      }
    );

     // res.send(newMammal);

//   //save document
   newMammal.save(function(err){
      res.send(newMammal);
    }); 
});

module.exports = {
  // get: list,
  post: save
};