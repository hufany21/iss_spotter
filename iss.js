const request = require('request');

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
// const fetchMyIP = function(callback) {
//   request(`https://api.ipify.org/?format=jsonhttps://api.ipify.org?format=json`, (error, response, body) => {
//     if (error) return callback(error, null);

//     if (response.statusCode !== 200) {
//       callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
//       return;
//     }

    
//     const ip = body;

//     callback(error, ip);
//   });
// };

// const fetchCoordsByIP  = function(ip, callback) {
//   request(`https://api.freegeoip.app/json/${ip}?apikey=c55bcf10-3eb8-11ec-ad38-d37364c48939`, (error, response, body) => {

//     if (error) return callback(error, null);

//     if (response.statusCode !== 200) {
//       callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
//       return;
//     }
//     let data = JSON.parse(body);
//     data = {longitude: data.longitude, latitude: data.latitude};

//     callback(error, data);
    
    
//   });
  

  
  
};


// use request to fetch IP address from JSON API


module.exports = {
  fetchMyIP,
  fetchCoordsByIP
};