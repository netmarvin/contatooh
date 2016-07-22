
// config/passport.js

var passport = require('passport');

var GitHubStrategy = require('passport-github').Strategy;

var mongoose = require('mongoose');


module.exports = function() {
    
    var Usuario = mongoose.model('Usuario');

    // código anterior omitido
    
    passport.use(new GitHubStrategy({
        
        clientID: 'bbf35ae082476ba7c1e1',
        
        clientSecret: '7ae0aa933684af7ddaaad7ea72869a7fae5991e9',
        
        callbackURL: 'http://localhost:3000/auth/github/callback'
        
    }, function(accessToken, refreshToken, profile, done) {
        
        Usuario.findOrCreate(

            { "login" : profile.username},

            { "nome" : profile.username},

            function(erro, usuario) {

                if(erro) {

                    console.log(erro);

                    return done(erro);

                }

                return done(null, usuario);

            }

        );
        
    }));
    
    
    passport.serializeUser(function(usuario, done) {

        done(null, usuario._id);

    });
    
    
    passport.deserializeUser(function(id, done) {

        Usuario.findById(id).exec()

        .then(function(usuario) {

            done(null, usuario);

        });

    });
    
    
};


