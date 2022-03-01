var mongoose = require('mongoose');

var schema = mongoose.Schema;

var messageSchema = new schema({
senderid:{
type:mongoose.Types.ObjectId,
ref:'User'
},
sendername:{
    type:String
},
senderemail:{
    type:String
},
messbody:{
type:String,
}
,
 otherfiles:[
     {
         type:String
     }
 ]


},{ timestamps: true });
module.exports = mongoose.model('VerifiedMessage', messageSchema);