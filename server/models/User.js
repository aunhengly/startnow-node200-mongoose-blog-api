//Import mongoose and extracts Schema into it's own variable
const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

//Creates a new Mongoose Schema with two properties
const UserSchema = new Schema({
    firstName   : { type: String, required: true}, // firstName property is string and it's required
    lastName    : { type: String, required: true},
    email       : { type: String, required: true},
    blogs       : [{type: Schema.Types.ObjectId, ref: 'Blog'}],
    social: {
        facebook    : { type: String, require: false },
        twitter     : { type: String, require: false},
        linkedIn    : { type: String, require: false}
    }
});

module.exports = mongoose.model('User', UserSchema);