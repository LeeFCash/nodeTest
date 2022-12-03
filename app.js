const express = require('express');
const { dirname } = require('path');
const path = require('path');
const pcALL = require('./routes/pcALL');
const app = express();

//app.use('/public', express.static(path.join(__dirname, 'main')));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// adding pcALL to /pcALL
app.use('/pcALL', pcALL);
// show terminal 
app.get('/',(req,res)=>{
const testThis = [{
    title: 'this is a test from app js',
    createdAt: new Date(),
    description: 'this is a test'
}]
// res.sendFile(path.join(__dirname,'main','terminal.html'));
res.render("terminal", { testThis: testThis });
});
app.listen(5000);