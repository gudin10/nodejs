const express=require('express');
const app=express();

const path=require('path');


//setinngs
app.set('port',3000);
//app.set("views", "path/to/views");
app.set('views',path.join(__dirname,'views'));
app.engine('html',require('ejs').renderFile);//Procesa la sintaxis de 'ejs' en HTML
app.set('view engine','ejs');


//routes
app.use(require('./routes/index'));//esta requiriendo el archivo de rutas
//middleware

//static filees
app.use(express.static(path.join(__dirname,'public')));//Puedo poner img, estilos , fuentes
//listening server

app.listen(app.get('port') ,function(){
    console.log('Servidor en puerto:',app.get('port'));
});