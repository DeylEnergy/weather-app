const request = require('request');

let url = 'https://maps.googleapis.com/maps/api/geocode/json?address=1301+lombard+st+philadelphia&key=';
url = url + require('./apiKey');

request({url, json:true}, (err, res, body) => {
  if (!err){
    console.log(JSON.stringify(body, undefined, 3));
  }
});
