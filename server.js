const express = require('express'),
      bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;
const router = express.Router();

router.get('/', function(req, res){
    res.json({ message: 'hooray! welcome to our api!' });    
});

app.use('/test', router);

app.listen(port);
console.log('Party Zone Server running on ' + port);

// BASE SETUP
// =============================================================================
