var express = require('express');
var app = express();
app.use(express.static('public'));
app.use('/scripts', express.static(__dirname + '/node_modules/'))

//when someone makes a get request for /
//respond with "hello world"
app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Tracking app listening on port 3000!')
});
