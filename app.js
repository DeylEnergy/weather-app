const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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
    console.log('Location:', data.address);
    weather.getWeather(42.3601, -71.0589, (err, forecast) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Temperature:', forecast.temperature);
        console.log('Apparent Temperature', forecast.apparentTemperature);
      }
    });
  }
});
