const express = require('express');
const session = require('express-session');
const path = require('path');
const routes = require('./routes');
const app = express();



app.set('view engine', 'ejs'); // Set EJS as the view engine
app.set('views', path.join(__dirname, 'views')); // Set the path to your EJS templates


app.use(express.urlencoded({ extended: false }));
app.use(session({
    name: 'session',
    secret: 'my_secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 3600 * 1000, // 1hr
    }
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

app.use((err, req, res, next) => {
    // console.log(err);
    return res.send('Internal Server Error');
});

app.listen(1000, () => console.log('Server is runngin on port 1000'));

//for running go live use http://localhost:1000/signup endpoint









