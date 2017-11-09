var path = require('path')
var router = require('express').Router();

router.get('/', function(req, res, next){
    res.sendFile(path.join(__dirname, '../../client/index.html'));
    next();
});

module.exports = router;
