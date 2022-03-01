var mongoose = require('mongoose');

var schema = mongoose.Schema;

var categorySchema = new schema({
    name: {
        type: String,
        required: true,
    },
    catgeoryId:{
        type:mongoose.Types.ObjectId,
        ref:'Category'
    }
});
module.exports = mongoose.model('Subcategory', categorySchema);