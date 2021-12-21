const request = require("supertest");
const app = require("../app");

describe("Test example", () => {
  it("SUCCESFUL POST /api/url", (done) => {
    request(app)
      .post("/api/url")
      .send({
        longUrl: "https://itchonib.vercel.app",
      })
      .expect(201)
      .expect((res) => {
        expect(res.body.shortUrl).toBeDefined();
        expect(res.body.shortUrl).toEqual(expect.stringContaining("http://"));
        //veryify id is no longer than 5 characters
        const shortUrlArr = res.body.shortUrl.split("/")
        expect(shortUrlArr[3].length).toEqual(5);
      })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });

    it("FAILING POST /api/url, incorrect URL format", (done) => {
      request(app)
        .post("/api/url")
        .send({
          longUrl: "itchonib.com",
        })
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          return done();
        });
    });
});
