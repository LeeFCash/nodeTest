const express = require('express');
const { dirname } = require('path');
const path = require('path');
// one is the const/var that gets the route1 file 
const route1 = require('./routes/Route1');
const app = express();

//app.use('/public', express.static(path.join(__dirname, 'main')));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// url is /pcALL use this to go to page / making url
app.use('/pcALL', route1);
// adds a path way for the html file to det the css file
app.use(express.static(path.join(__dirname, 'views')));
// show terminal 
app.get('/',(req,res)=>{
const testThis = [{
    title: 'this is a test from app js',
    createdAt: new Date(),
    description: 'this is a test'
}]
// res.sendFile(path.join(__dirname,'main','terminal.html'));
res.render("test", { testThis: testThis });
});
app.listen(3000);