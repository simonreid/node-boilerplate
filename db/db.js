const mongo = require('mongodb');
const config = require('../config/config');

module.exports.connect = () => {
  let url = config.dburl;
  console.log('connecting to mongodb with options: ' + JSON.stringify(config.mongoOpts));
  mongo.connect(url, config.mongoOpts, (err, res) => {
      if (err) {
          console.log('Connection refused to ' + url);
          console.log(err);
      } else {
          console.log('Connection successful to: ' + url);
      }
  });
}
