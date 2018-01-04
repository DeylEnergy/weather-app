const request = require('request');
const yargs = require('yargs');

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

const address = encodeURIComponent(argv.address);

let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=`;
url = url + require('./apiKey');

request({url, json:true}, (err, res, body) => {
  if (!err && res.statusCode == 200){
    console.log('Adress:', body.results[0].formatted_address);
    console.log('Latitude:', body.results[0].geometry.location.lat);
    console.log('Longitude:', body.results[0].geometry.location.lng);
  }
});
