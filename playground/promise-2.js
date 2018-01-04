const request = require('request');
const apiKey = require('../apiKey').google;

const getCoordinates = (address) => {
  return new Promise((resolve, reject) => {
    const urlObject = {
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`,
      json: true
    };
    request(urlObject, (err, res, body) => {
      if (!err && body.status == 'OK'){
        resolve(
          {
            address: body.results[0].formatted_address,
            latitude: body.results[0].geometry.location.lat,
            longitude: body.results[0].geometry.location.lng
          }
        )
      } else if (body.status == 'ZERO_RESULTS') {
        reject('No data for this coordinate.')
      } else {
        reject('Unable to get data.')
      }
    });
  });
};

getCoordinates('19146')
  .then((data) => {
    console.log(JSON.stringify(data, undefined, 3));
  })
  .catch((err) => console.log('Error:', err));
