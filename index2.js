const { nextISSTimesForMyLocation } = require('./iss_promised');

const printPassTimes = function(times) {
  for (let val of times) {
    const date = new Date(0);
    date.setUTCSeconds(val.risetime);
    console.log(`Next pass at ${date} for ${val.duration} seconds!`);
  }
}

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });

  