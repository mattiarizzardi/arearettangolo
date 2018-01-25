/*globals require*/
var express = require('express');
// instantiate express
const app = express();
//require module getArea
const getArea = require('./area.js');


// set our port
var port = process.env.PORT || 8080;
// get an instance of the express Router
var router = express.Router();

//enable route /getArea
router.route('/getArea')
  .get(function (req, res){
      //parse query params
      var x = parseInt(req.query.side1);
      var y = parseInt(req.query.side2);
      var arrayToPass = [x,y];

      //call getArea and check the result
      var r = getArea(arrayToPass);

      if(r >= 0){
        res.json({ area : r });
        res.status = 200;
      }
      else{
        res.status(400).send({ "area" : r });
      }

});

//enable route /getArea
app.get('/getArea', function (req, res){
      //parse query params
      var x = parseInt(req.query.side1);
      var y = parseInt(req.query.side2);
      var arrayToPass = [x,y];

      //call getArea and check the result
      var r = getArea(arrayToPass);

      if(r >= 0){
        res.json({ area : r });
        res.status = 200;
      }
      else{
        res.status(400).send({ "area" : r });
      }

});



// middleware route to support CORS and preflighted requests
app.use(function (req, res, next) {
    // do logging
    console.log('Something is happening.');
    //Enabling CORS
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Content-Type', 'application/json');
    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST ,DELETE');
        return res.status(200).json({});
    }
    // make sure we go to the next routes
    next();
});


// register our router on /api
app.use('/api', router);

// handle invalid requests and internal error
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({ error: { message: err.message } });
});


app.listen(port);
console.log('Magic happens on port ' + port);
