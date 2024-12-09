var mongoose=require('mongoose');
const validator=require('validator');
mongoose.connect('mongodb://localhost/astro',{ useNewUrlParser: true, useUnifiedTopology: true });

const songschema= new mongoose.Schema({
    title:{type:String},
    lyrics:{type:String},
    filepath:{type:String}
})

module.exports=mongoose.model('song',songschema);