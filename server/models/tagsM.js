var mongoose = require('mongoose');

var schema = mongoose.Schema;

var tagSchema = new schema({
    name: {
        type: String,
        required: true,
    }
});
module.exports = mongoose.model('Tag', tagSchema);