const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.urlencoded({ extended: false }));

app.set('view engine','ejs');

// Still working on this
app.get('/', )

app.post('/', (req, res) => {
    if (req.body.numer) {
        let number = req.body.number;
        res.render('home', { message: `You entered ${number}`});
    }
});