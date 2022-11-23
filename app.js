const express = require('express');
const { dirname } = require('path');
const path = require('path');
const app = express();

//app.use('/public', express.static(path.join(__dirname, 'main')));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get('/',(req,res)=>{
// res.sendFile(path.join(__dirname,'main','terminal.html'));
res.render("terminal");
});
app.listen(5000);