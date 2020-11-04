const express = require('express');
const app = express();
app.set("view engine", "pug");
app.set("views", "./views");





app.use(express.static('public'));
const day = new Date();
const date = day.toDateString().substring(0,3);
const hours = day.toTimeString().substring(0,2);

app.use(veriftime =  (req, res, next)=> {
const day = new Date();
const date = day.toDateString().substring(0,3);
const hours = day.toTimeString().substring(0,2);
let temp=false;
switch(date){
  case 'Mon' : 
  case 'Tue' : 
  case 'Wed' : 
  case 'Thu' : 
  case 'Fri' : temp =true ;
}
if ((temp===true) && (hours>=9) && (hours<=17) )
next();
else res.send('sorry');
    


});


app.get('/', function (req, res) {
    res.render("Homepage");
})
app.get('/Contactservice', function (req, res) {
    res.render("Contactservice");
})
app.get('/Ourservice', function (req, res) {
    res.render("Ourservice");
})

const port=4000 ;
app.listen(port,(err) =>{
    if ( err) console.log('connection failed')
    else console.log('serveur is runing  on port 2000 ')
    
   console.log(date);
   console.log(hours) ;
})