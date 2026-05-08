import passport from "passport"
import {Strategy as GoogleStrategy} from "passport-google-oauth20"
import authModel from "../models/userAuthModel.js"

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await authModel.findOne({userEmail: profile.emails[0].value})

        if (!user) {
          user = await authModel.create({
            userName: profile.displayName,
            userEmail: profile.emails[0].value,
            userPassword: "google-auth",
          })
        }

        return done(null, user)
      } catch (e) {
        return done(e, null)
      }
    },
  ),
)

export default passport
