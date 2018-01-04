const request = require('request');
const apiKey = require('../apiKey');

const getWeather = (lat, lng, cb) => {
  const requestObj = {
    url: `https://api.darksky.net/forecast/${apiKey.forecast}/${lat},${lng}`,
    json: true
  }
  request(requestObj, (err, res, body) => {
    if (!err && res.statusCode != 400){
      data = {
        apparentTemperature: body.currently.apparentTemperature,
        temperature: body.currently.temperature
      }
      cb(null, data);
    } else {
      cb('Unable to get the weather.');
    }
  });
}
module.exports.getWeather = getWeather;
