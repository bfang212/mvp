var mongoose = require('mongoose');
mongoose.connect(process.env.MLAB_URL || 'mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var stockSchema = mongoose.Schema({
  symbol: {type: String, unique: true},
  lastprice: Number,
  week52low: Number,
  percentage_difference: Number
  },
  {timestamps: true}
);

let Stocks = mongoose.model('Stocks', stockSchema);

let find = () => {
  return Stocks.find({})
               .sort('-percentage_different')
               .exec()
};

let save = (stock) => {
  console.log('here')
  return new Stocks({
    symbol: stock.symbol,
    lastprice: stock.latestPrice,
    week52low: stock.week52Low,
    percentage_difference: (((stock.latestPrice / stock.week52Low) - 1) * 100).toFixed(2)
  }).save()
    .catch((err) => {console.err(error)});
};


exports.save = save;
exports.find = find;