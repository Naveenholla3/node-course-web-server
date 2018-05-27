const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname+'/public'));

hbs.registerHelper('curYear', ()=>{
  return (new Date().getFullYear());
});

app.get('/',(req,res)=>{
  res.render('about.hbs',{
    welcomeText: 'hello world!'
  });
});

app.get('/about',(req,res)=>{
  res.render('about.hbs',{
    pageTitile: 'About'
  });
});



app.listen(3000, ()=>{
  console.log('server is up on port 3000')
});
