var express = require('express');
var router = express.Router();

require(`dotenv`).config();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', clave: process.env.KEY });
});

router.get(`/contact`,(req,res)=> {
  res.render(`contact`);
} )

module.exports = router;
