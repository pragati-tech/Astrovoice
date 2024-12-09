var mongoose=require('mongoose');
var passportLocalMongoose=require('passport-local-mongoose');
mongoose.connect('mongodb://localhost/astro',{ useNewUrlParser: true, useUnifiedTopology: true });

var userschema=mongoose.Schema({
 email:{type:String,require:true,unique:true},
 password:{type:String,require:true},
})
const db = mongoose.connection;
db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});
db.on('disconnected', () => {
    console.log('MongoDB disconnected.');
});
db.on('connected', () => {
    console.log('Connected to MongoDB.');
});

module.exports=mongoose.model('users',userschema);
