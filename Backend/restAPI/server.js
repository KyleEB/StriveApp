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

/**
 * Creates User route from REST routes
 */
const user = require('./routes/userRoute');

app.use('/api', user);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

//Code Below is from https://devdactic.com/ionic-realtime-socket-io/
let http = require('http').Server(app);
let io = require('socket.io')(http);
 
/**
 * Creates methods for when a connection is established via socket.io
 */
io.on('connection', (socket) => {
  
  socket.on('disconnect', function(){
    io.emit('users-changed', {user: socket.nickname, event: 'left'});   
  });
 
  socket.on('set-nickname', (nickname) => {
    socket.nickname = nickname;
    io.emit('users-changed', {user: nickname, event: 'joined'});    
  });
  
  socket.on('add-message', (message) => {
    io.emit('message', {text: message.text, from: socket.nickname, created: new Date()});    
  });
});
 
var port = 3001;
 
http.listen(port, function(){
   console.log('listening in http://localhost:' + port);
});


