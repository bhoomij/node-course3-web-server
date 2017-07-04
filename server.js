const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const app = express();

const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});
hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

// app.use((req, res, next) => {
//     res.render('maintenance');
// });
app.use(express.static(__dirname + '/public'));
// app.use((req, res, next) => {
//     var now = new Date().toString();
//     var str = now + ' ' + req.method + ' ' + req.url;
//     fs.appendFile('server.log', str + '\n', (err) => {
//         console.log(err);
//     }); 
//     next();
// });

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        pageTitle: 'Home Page',
        message: 'Welcome to my website'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        pageTitle: 'About Page'
    })
});

app.get('/project', (req, res) => {
    res.render('project', {
        pageTitle: 'Project Page',
        projectPage: 'https://github.com/bhoomij/node-course3-web-server'
    })
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: '404. Eror page'
    });
});

app.listen(port, () => {
    console.log(`server is listening on ${port}`);
});