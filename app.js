const request = require('request');

let url = 'https://maps.googleapis.com/maps/api/geocode/json?address=1301+lombard+st+philadelphia&key=';
url = url + require('./apiKey');

request({url, json:true}, (err, res, body) => {
  if (!err && res.statusCode == 200){
    console.log('Adresss:', body.results[0].formatted_address);
    console.log('Latitude:', body.results[0].geometry.location.lat);
    console.log('Longitude:', body.results[0].geometry.location.lng);
  }
});
