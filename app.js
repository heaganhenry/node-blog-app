const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.listen(3000);

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    const blogs = [
        { title: 'Blog 1', snippet: 'Lorem ipsum dolor sit amet consectetur' },
        { title: 'Blog 2', snippet: 'Lorem ipsum dolor sit amet consectetur' },
        { title: 'Blog 3', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    ];
    res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.use((req, res) => {
    res.render('404', { title: '404' });
});