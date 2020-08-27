const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

const user = require('./models/User');
const survey = require('./models/Survey');

require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();


app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60  * 1000, //maxAge needs to be in ms so this calc converts 30d to ms
        keys: [keys.cookieKey] , 
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authroutes')(app);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.get('/', (req,res)=>{
    res.send({ 'hi': 'there',
'jerk': 'face' });
});

// use environment var PORT, or local 5000 (if dev)
const PORT = process.env.PORT || 5000;

app.listen(PORT);