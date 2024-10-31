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
        switch(number) {
            case 1:
            case 2:
                res.render('home', { message: `1, 2, Buckle my shoe.`});
                break;
            case 3:
            case 4:
                res.render('home', { message: `3, 4, Shut the door.`});
                break;
            case 5:
            case 6:
                res.render('home', { message: `5, 6, pick up sticks.`});
                break;
            case 7:
            case 8:
                res.render('home', { message: `7, 8, Lay them strait.`});
                break;
            case 9:
            case 10:
                res.render('home', { message: `9, 10, A big fat hen!`});
                break;
            default:
                res.render('home', { message: `Please enter a number between 1 and 10.`});
                break;

        }
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${3000}`)
});