const yargs = require('yargs');
const axios = require('axios');

const apiKey = require('./apiKey');

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
const address = argv.address;
const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey.google}`;
axios.get(url)
  .then((res) => {
    if (res.data.status == 'ZERO_RESULTS'){
      throw new Error('No results.');
    }
    console.log('Location:', res.data.results[0].formatted_address);
    const lat = res.data.results[0].geometry.location.lat;
    const lng = res.data.results[0].geometry.location.lng;
    const weatherUrl = `https://api.darksky.net/forecast/${apiKey.forecast}/${lat},${lng}`;
    return axios.get(weatherUrl);
  })
  .then((res) => {
    console.log('Summary:', res.data.currently.summary);
    console.log('Temperature:', res.data.currently.temperature);
    console.log('Feels like:', res.data.currently.apparentTemperature);
  })
  .catch((e) => {
    if (e.code == 'ENOTFOUND'){
      console.log('Something wrong with connection.');
    } else {
      console.log(e.message);
    }
  });
