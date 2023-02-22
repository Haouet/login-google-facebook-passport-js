// const cookieSession = require('cookie-session')
const session = require('express-session')
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const passportStetup = require('./passport');
const authRouter = require('./routes/auth');


const app = express();

// app.use(cookieSession({
//     name: 'session',
//     keys: ["Sedra"],  
//     // Cookie Options
//     maxAge: 24 * 60 * 60 * 1000 // 24 hours
//   }));
app.use(session({
    secret: 'somethingsecretgoeshere',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
 }));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors({
    origin:"http://localhost:3000",
    methods: "GET, POST, PUT, DELETE",
    // allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));
app.use('/auth', authRouter);


app.listen(5000, () => {
    console.log('Server is running on port 5000');
})