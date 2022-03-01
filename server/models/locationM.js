var mongoose = require('mongoose');

var schema = mongoose.Schema;

var locationSchema = new schema({
    name: {
        type: String,
        required: true,
    }

});
module.exports = mongoose.model('Location', locationSchema);