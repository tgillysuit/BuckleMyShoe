const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

function buckleConverter(number) {
    switch (number) {
        case 1:
        case 2:
            return "1, 2, Buckle my shoe.";
        case 3:
        case 4:
            return "3, 4, Shut the door.";
        case 5:
        case 6:
            return "5, 6, Pick up sticks.";
        case 7:
        case 8:
            return "7, 8, Lay them straight.";
        case 9:
        case 10:
            return "9, 10, A big fat hen!";
        default:
            return "Please enter a number between 1 and 10.";
    }
}

app.get('/', (req, res) => {
    console.log("Home Page - Server Side");
    res.render('home', { message: null });
});

app.post('/', (req, res) => {
    const number = parseInt(req.body.number);
    const message = buckleConverter(number);

    res.render('home', { message });
});


app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});