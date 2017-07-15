const nock = require("nock");
const movies = require("./movies");

const mockResponse = {
  status: "ok",
  listings: [
    {
      times: ["10:20"],
      title: "Annie (2014)"
    }
  ]
};

const mockError = {
  status: "ERR",
  reason: "Error fetching movie listings for 7530"
};

describe("movies", () => {
  describe("When the cinema provided does not have an id", () => {
    it("returns an error response in the catch block", done => {
      movies.getListingsForCinema({}).catch(e => {
        expect(e.message).toEqual("Cinema with id required");
        done();
      });
    });
  });

  describe("When the cinema has an id", () => {
    describe("And the response is successful", () => {
      let mockApi;
      beforeEach(() => {
        mockApi = nock("http://api.cinelist.co.uk")
          .get("/get/times/cinema/7530")
          .reply(200, mockResponse);
      });

      it("will call the api with the correct details", done => {
        movies.getListingsForCinema({ id: 7530 }).then(() => {
          mockApi.done();
          done();
        });
      });

      it("will resturn the object literal response", done => {
        movies.getListingsForCinema({ id: 7530 }).then(result => {
          expect(result).toEqual(mockResponse);
          mockApi.done();
          done();
        });
      });
    });

    describe("And the response is an Error", () => {
      let mockApi;
      beforeEach(() => {
        mockApi = nock("http://api.cinelist.co.uk")
          .get("/get/times/cinema/7530")
          .reply(500, mockError);
      });
      it("returns an error in the catch block", done => {
        movies.getListingsForCinema({ id: 7530 }).catch(error => {
          expect(error.message).toEqual(mockError.reason);
          mockApi.done();
          done();
        });
      });
    });
  });
});
