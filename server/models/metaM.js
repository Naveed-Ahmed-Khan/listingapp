var mongoose = require('mongoose');

var schema = mongoose.Schema;

var metaSchema = new schema({
    name: {
        type: String,
        required: true,
    }

});
module.exports = mongoose.model('Meta', metaSchema);