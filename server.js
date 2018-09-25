const express = require("express");
const hbs = require("hbs");

var app = express();

app.set("view engine", "hbs");
app.use(express.static(__dirname+"/public"));

hbs.registerPartials(__dirname+'/views/partials');

app.use((req,res,error) =>{
  res.render('maintenance.hbs');
})
app.get("/", (req,res) => {
//  res.send('Hello Express');
// res.send({
//   name:'Aarav',
//   likes: [
//     'Sports',
//     'Sliding'
//   ]
// });
res.render("home.hbs",{
  pageTitle:'Home Page',
  welcomeMessage: 'Welcome to my website',
  currentYear: new Date().getFullYear( )
});
});

app.get("/about", (req,res) => {
  res.render("about.hbs",{
    pageTitle:'About Page',
    currentYear: new Date().getFullYear()
  });
});

app.listen(3000,() => {
  console.log('Server running on port 3000');
});
