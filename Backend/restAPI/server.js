const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const cors = require('cors');
const passport = require('passport');

const app = express();

//mongoose.Promise = global.Promise;
var uri = "mongodb+srv://striveAdmin:striveAdmin@striveapp-cdpqh.mongodb.net/test?retryWrites=true"
mongoose.connect(uri, {useNewUrlParser: true}).then(
    ()=> {
        console.log("Database connection established");
    },

    err => {
        console.log("error couldn't connect due to", err);
    }
);
//'mongodb://localhost/striveapp'
require('./passport/passport-local');

app.use(cors());

app.use(express.static('public'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(session({
    secret: 'thisisasecretkey',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({mongooseConnection: mongoose.connection})
}));

app.use(passport.initialize());
app.use(passport.session());


const user = require('./routes/userRoute');

app.use('/api', user);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
