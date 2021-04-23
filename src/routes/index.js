//routes
const express=require('express');
const router=express.Router();//para crear multiple rutas

router.get('/',function(req,res){
    //res.sendFile(path.join(__dirname,'views/index.html'));//para decirle donde esta el archivo
    res.render('index.html',{title:'Pagina de Inicio'});
});

router.get('/contact',function(req,res){
    //res.sendFile(path.join(__dirname,'views/index.html'));//para decirle donde esta el archivo
    res.render('contact.html',{title:'Pagina de Contacto'});
});

module.exports=router;