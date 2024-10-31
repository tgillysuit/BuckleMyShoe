const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.urlencoded({ extended: false }));

app.set('view engine','ejs');

app.get('/', (req,res) => {
    console.log("Home Page - Server Side");
    res.render('home');
});

app.get('/', (req,res) => {
    console.log(req.body);

    let details = req.body;
    res,render('confirm', {details: details});
});

app.post('/', (req, res) => {
    if (req.body.number) {
        let number = req.body.number;
        res.render('home', { message: `You entered ${number}`});
    }
});

app.listen(PORT, () => {
    console.log(`Server runnin on port http://localhost:${3000}`)
});