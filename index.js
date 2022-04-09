const express= require('express');
const app= express();
const port=8000;
const expressLayouts= require('express-ejs-layouts');
const db= require('./config/mongoose');
const path = require('path');


app.use(express.urlencoded({extended: false}));
app.use(expressLayouts); 
app.set('view engine', 'express');
app.set('views','./views');
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
app.use(express.static(env.asset_path));
app.set('view engine', 'ejs');
app.use('/', require('./routes'));
app.listen(port, function(err){ //creates a http server, 'express' handles the creation part
    if(err){
        console.log(`Error : ${err}`);
        return;
    };

    console.log(`server is running on port ${port}`);


});