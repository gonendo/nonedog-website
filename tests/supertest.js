const supertest = require('supertest');
const app = require("../app")

describe("GET /", () => {
    it("It should has status code 200", (done) => {
        supertest(app)
            .get("/")
            .expect(200)
            .end((err,res) => {
                if (err) done(err);
                done();
            });
    });
});