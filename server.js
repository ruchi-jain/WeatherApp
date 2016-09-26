var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;  //when working in NODE.js you can access env var by Process.env

//only operate on http, transfer all trafic all https to http

app.use(function(req, res, next){
    if(req.headers['x-forwarded-proto'] === 'http') {
        next();
    } else {
        res.redirect('http://' + req.hostname + req.url);
    }
})
app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up on port 3000');
});
