const express = require('express');
const hbs = require('hbs');
var app = express();
const port = 3000;
//key - view engine
//value- hbs
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
  res.render('landing.hbs', {
    pageTitle: 'Landing Page',
    welcomeMessage: 'Welcome to my website',
    currentYear: new Date().getFullYear(),
    studentDetails: 'BCA'
});
});
app.get('/contact', (req, res) => {
  res.render('contact.hbs', {
    pageTitle: 'Contact Page',
    currentYear: new Date().getFullYear()
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
