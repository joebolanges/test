var express = require('express');
var bodyParser = require('body-parser');
var wol = require('wake_on_lan');
var router = express.Router();

router.get('/', function(req, res) {
    res.send('Placeholder page for Pickup Wakeup server.');
});

/* GET home page. */
router.post('/wakeup', function(req, res, next) {
    console.log(req);
    // var mac_address = req.params.mac_address;
    var mac_address = "20:DE:20:DE:20:DE";
    console.log(mac_address);
    wol.wake(mac_address, function(error) {
        if (error) {
            // handle error
            var failure = {
                type: 'wakeup',
                data: 'status',
                result: 'success',
            };
            res.send(failure);
        } else {
            // done sending packets
            var success = {
                type: 'wakeup',
                data: 'status',
                result: 'success',
            };
            res.send(success);
      }
    });
});

module.exports = router;
