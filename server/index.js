var express = require('express');
var bodyParser = require('body-parser');
var axios = require('axios');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
var {find, save} = require('../database-mongo/index.js');


var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

app.post('/stocks', function(req, res) {
  let ticker = req.body.ticker
  axios.get(`https://api.iextrading.com/1.0/stock/${ticker}/quote?displayPercent=true`)
  .then((stock) => {
    axios.get(`https://api.iextrading.com/1.0/stock/${ticker}/news/last/3`)
    .then((potato) => {
      save(stock.data, potato.data).then(() => {
        res.status(201).send()
      });
    })
  }) 
  .catch((err) => console.error(err))
})


app.get('/stocks', function (req, res) {
  find()
  .then((stocks) => {res.status(200).send(stocks)})
  .catch((err) => (console.error(err)))
});

let port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('listening on port 3000!');
});

