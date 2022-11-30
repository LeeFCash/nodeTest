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
// res.sendFile(path.join(__dirname,'main','terminal.html'));
res.render("terminal");
});
app.listen(5000);