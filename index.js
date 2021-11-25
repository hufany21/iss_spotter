
   
const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  for (let val of passTimes) {
    const date = new Date(0);
    date.setUTCSeconds(val.risetime);
    console.log(`Next pass at ${date} for ${val.duration} seconds!`);
  }
});
// fetchISSFlyOverTimes({ longitude: -79.7172, latitude: 43.5639 },(error,data) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
    
//   console.log('It worked! Returned Cords:' , data);
// });
// fetchCoordsByIP('99.247.164.194',(error,data) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
    
//   console.log('It worked! Returned Cords:' , data);
// });
// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
  
//   console.log('It worked! Returned IP:' , ip);
// });