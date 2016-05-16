
var fs = require('fs'),
    http = require('http'),
    express = require('express'),
    app = express();

app.use(express.static('imgs'));

app.route('/').get(function(req, res) {
  //console.log(new Date().toString() + ' ((( ' + req.ip + ' )))');
  res.write(fs.readFileSync('./index.html'));
  res.status(200).end();
});

app.route('/imgs').get(function(req, res) {
  var imgs = fs.readdirSync('./imgs');
  res.type('json');
  res.send(imgs);
  res.status(200).end();
});

http.createServer(app).listen(8080);
console.log('Server up on port 8080');
