const yargs = require('yargs');

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
