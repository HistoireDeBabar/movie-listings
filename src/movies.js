const fetch = require("node-fetch");
const path = require("./consts").listingsPath;

const getListingsForCinema = ({ id }) => {
  return new Promise((resolve, reject) => {
    if (!id) {
      return reject(new Error("Cinema with id required"));
    }

    return fetch(`${path}${id}`)
      .then(result => {
        if (result.status != 200) {
          return reject(new Error(`Error fetching movie listings for ${id}`));
        }
        return result.json();
      })
      .then(resolve)
      .catch(reject);
  });
};

module.exports = {
  getListingsForCinema
};
