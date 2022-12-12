const express = require('express');
// const passport = require('passport');
// const User = require('../models/user.model');
const router = express.Router();

// const JwtStratedgy = require('passport-jwt').Strategy;
// const ExtractJwt = require('passport-jwt').ExtractJwt;

// var opts = {};
// opts.secretOrKey = "my-secretkey";
// opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
// passport.use(new JwtStratedgy(opts, function(jwt_payload, done) {
//   if (jwt_payload.is_admin) {
//     User.findOne({_id: jwt_payload._id}, function (err, admin) {
//       if (err) {
//         return done(err, false);
//       }
//       if (admin) {
//         return done(null, admin);
//       } else {
//         return done(null, false);
//       }
//     })
//   }
// }))


const dataRoute = require('./data.route');




router.use('/data',                 dataRoute);


module.exports = router;