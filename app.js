const express = require('express');

const app = express();

// Middlewares
// app.use('/posts', () => {
//     console.log("This is a middleware!");
// });

// ROUTES
app.get('/', (req,res) => {
    res.send('This is the main url (Home)');
});

app.get('/posts', (req,res) => {
    res.send('This are the posts');
});

// How to start listening to the server:
app.listen(3000);