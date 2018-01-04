/*const yargs = require('yargs');

const geocode = require('./geocode/geocode');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Type your adress',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

geocode.geocodeAdress(argv.address, (errorMessage, data) => {
  if (errorMessage){
    console.log(errorMessage);
  } else {
    console.log(JSON.stringify(data, undefined, 3));
  }
});
*/
const request = require('request');
const apiKey = require('./apiKey');

request({
  url: `https://api.darksky.net/forecast/${apiKey.forecast}/37.8267,-122.4233`,
  json: true
}, (err, res, body) => {
  console.log('Latitude:', body.latitude);
  console.log('Longitude:', body.longitude);
  console.log('Current Temperature:', body.currently.temperature);
});
