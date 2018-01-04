const request = require('request');

module.exports = {
  geocodeAdress(address){
    address = encodeURIComponent(address);

    let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=`;
    url = url + require('../apiKey');

    request({url, json:true}, (err, res, body) => {
      if (err){
        console.log('Something wrong with connection');
      } else if (body.status == 'ZERO_RESULTS'){
        console.log('Address has not been found');
      } else if (body.status == 'OK'){
        console.log('Address:', body.results[0].formatted_address);
        console.log('Latitude:', body.results[0].geometry.location.lat);
        console.log('Longitude:', body.results[0].geometry.location.lng);
      }
    });
  }
}
