let config = require('./config.global');

//development specific config goes here

//mongodb
config.dburl = 'mongodb://dbUser:dbUser@127.0.0.1:27017/test?authMechanism=SCRAM-SHA-1';
config.env = 'development';

//jwt signature secret
config.jwtsecret = 'simonssuperspecialsecret';
config.jwtExpirationSeconds = 60 * 60 * 24; //1 day expiration

config.sessionsecret = 'simonssuperspecialsecret2';

//export
module.exports = config;
