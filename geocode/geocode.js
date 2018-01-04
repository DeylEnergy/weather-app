const request = require('request');

module.exports = {
  geocodeAdress(address, cb){
    address = encodeURIComponent(address);

    let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=`;
    url = url + require('../apiKey');

    request({url, json:true}, (err, res, body) => {
      if (err){
        cb('Something wrong with connection');
      } else if (body.status == 'ZERO_RESULTS'){
        cb('Address has not been found');
      } else if (body.status == 'OK'){
        const data = {
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        };
        cb(null, data);
      }
    });
  }
}
