const fetch = require("node-fetch");
const path = require("./consts").cinemaPath;

const byPostcode = postalCode => {
  return new Promise((resolve, reject) => {
    if (!postalCode) {
      return reject(new Error("postalCode is undefined"));
    }
    return fetch(`${path}${postalCode}`)
      .then(result => {
        if (result.status != 200) {
          return reject(new Error("Error processing cinema listings"));
        }
        return result.json();
      })
      .then(resolve)
      .catch(reject);
  });
};

module.exports = {
  byPostcode
};
