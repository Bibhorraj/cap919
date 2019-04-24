const express = require('express');
const hbs = require('hbs');
var app = express();
const port = 3000;
//including partials
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
//including helper
hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});
hbs.registerHelper('changeCase', (text) => {
  return text.toUpperCase();
});
hbs.registerHelper('changeCaseLower', (text) => {
  return text.toLowerCase();
});
app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome to my website',
    studentDetails: 'BCA'
});
});
app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
});
});
app.get('/error', (req, res) => {
  res.send({
    errorMsg: 'Unable to find the page'
});
});
app.listen(port, () => {
  console.log(`App listening on port number :- ${port}...!!!`);
});
