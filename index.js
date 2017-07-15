const movies = require("./src/movies");
const cinemas = require("./src/cinemas");

module.exports = {
  getCinemaByPostcode: cinemas.byPostcode,
  getMovieListingsByCinema: movies.getListingsForCinema
};
