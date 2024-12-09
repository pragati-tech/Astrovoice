const express=require('express');
const router=express.Router();
const Article=require('../models/blog')

router.get('/new',(req,res)=>{
    res.render('article/new',{article:new Article()})
})

router.post('/',async(req,res)=>{
  let article= new Article({
    title: req.body.title,
    description:req.body.description,
    markdown:req.body.markdown
   })
   try{
    article=await article.save()
    res.redirect('/blogs')
   }
  catch(e){
    res.render('article/new',{article:article})
  }
})

module.exports=router