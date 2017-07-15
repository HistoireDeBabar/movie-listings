const nock = require("nock");
const cinemas = require("./cinemas");

const path = "http://api.cinelist.co.uk";
const postalCode = "NE333AX";
const testCinema1 = {
  distance: 0.2,
  name: "Cineworld",
  id: 2
};

const testCinema2 = {
  distance: 0.4,
  name: "Odeon",
  id: 3
};

const testCinema3 = {
  distance: 1.0,
  name: "The Customs House",
  id: 5
};

const mockResponse = {
  postalCode,
  cinemas: [testCinema1, testCinema2, testCinema3]
};

const mockError = {
  message: "Error processing cinema listings"
};

describe("cinemas", () => {
  describe("When calling cinemas without a postal code", () => {
    it("will return an error in the promise catch block", done => {
      cinemas.byPostcode().catch(e => {
        expect(e.message).toEqual("postalCode is undefined");
        done();
      });
    });
  });

  describe("When cinemas is called with a postal code", () => {
    describe("And the response is successful", () => {
      let mockApi;
      beforeEach(() => {
        mockApi = nock(path)
          .get("/search/cinemas/postcode/NE333AX")
          .reply(200, mockResponse);
      });

      it("will call the cinema api with the correct arguments", done => {
        cinemas.byPostcode(postalCode).then(() => {
          mockApi.done();
          done();
        });
      });

      it("will return a javascript literal from the response", done => {
        cinemas.byPostcode(postalCode).then(response => {
          expect(response).toEqual(mockResponse);
          done();
        });
      });
    });

    describe("And the response is an Error", () => {
      let mockApi;
      beforeEach(() => {
        mockApi = nock(path)
          .get("/search/cinemas/postcode/NE333AX")
          .reply(505, mockError);
      });
      it("returns an error in the catch block", done => {
        cinemas.byPostcode(postalCode).catch(error => {
          expect(error.message).toEqual(mockError.message);
          mockApi.done();
          done();
        });
      });
    });
  });
});
