const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth20').Strategy;
const  GOOGLE_CLIENT_ID ="512981102031-lnekl7jjlboqrat8n8urrbe913mv7glr.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET ="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"
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
    done(null, profile);

  }
));
passport.serializeUser(function(user, done) { 
    done(null, user);
})
passport.deserializeUser(function(user, done) { 
    done(null, user);
})

