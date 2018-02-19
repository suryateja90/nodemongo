var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/surya_db', function(err) {
    if(!err) {
        console.log('connected successfuly');
    }
});

var companySchema = new Schema({
    name: String,
    strength: Number,
    CEO: String
})
var comp = mongoose.model('compSchema', companySchema);
module.exports  = comp; 