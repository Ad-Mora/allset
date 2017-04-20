var Message = require('../models/Message');

var MessageController = {

    handleMessage: function(req, res) {
        var message = req.body.message;
        var new_message = new Message({
            message: message
        });

        new_message.save(function(err) {
            if (err) {
                throw err;
            } else {
                console.log('Message successfully saved');
                res.sendStatus(200);
            }
        });
        res.end();
    }
};

module.exports = MessageController;