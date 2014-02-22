// sets Schema and Models
var mongoose = require('mongoose');

var mammalSchema = new mongoose.Schema(
  {
    name: 'string', 
    type: 'string',
    year_extinct: Number
  }
);

var ExtinctMammal = mongoose.model('ExtinctMammal', mammalSchema);

module.exports = ExtinctMammal;