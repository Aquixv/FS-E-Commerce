const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/Schema');

module.exports = function (passport) {
  passport.use(
 new GoogleStrategy(
  {
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: 'http://localhost:1500/api/users/auth/google/callback', 
  },
      async (accessToken, refreshToken, profile, done) => {
        try {
          let user = await User.findOne({ googleId: profile.id });

          if (user) {
            return done(null, user); 
          } 
          let existingEmailUser = await User.findOne({ email: profile.emails[0].value });

          if (existingEmailUser) {
             existingEmailUser.googleId = profile.id;
             existingEmailUser.authProvider = 'google';
             await existingEmailUser.save();
             return done(null, existingEmailUser);
          }

          const newUser = await User.create({
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value,
            authProvider: 'google',
          });
          
          return done(null, newUser);
          
        } catch (err) {
          console.error(err);
          return done(err, false);
        }
      }
    )
  );
};