var MessageController = {

    handleMessage: function(req, res) {
        console.log(req.body.message);
    }
};

module.exports = MessageController;