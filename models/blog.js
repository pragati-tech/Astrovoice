var mongoose=require('mongoose');
const validator=require('validator');
mongoose.connect('mongodb://localhost/astro',{ useNewUrlParser: true, useUnifiedTopology: true });

var blogschema=new mongoose.Schema({
    title :{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true
    },
    markdown:{
        type:String,
        required:true
    },
    createdAt:{
        type: Date,
        default:Date.now()
    }
})

module.exports=mongoose.model('blog',blogschema);