const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));  // For handling PUT/DELETE in forms

// Placeholder for posts (in-memory data for now)
let posts = [];

// Routes
app.get('/', (req, res) => {
    res.render('index.ejs', { posts });
});

app.get('/new', (req, res) => {
    res.render('new-post.ejs');
});

app.post('/create', (req, res) => {
    const { title, content } = req.body;
    posts.push({ title, content, id: Date.now() });
    res.redirect('/');
});

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});


app.get('/edit/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    res.render('edit-post.ejs', { post });
});

app.post('/edit/:id', (req, res) => {
    const { title, content } = req.body;
    const post = posts.find(p => p.id === parseInt(req.params.id));
    post.title = title;
    post.content = content;
    res.redirect('/');
});


app.post('/delete/:id', (req, res) => {
    posts = posts.filter(post => post.id !== parseInt(req.params.id));
    res.redirect('/');
});
