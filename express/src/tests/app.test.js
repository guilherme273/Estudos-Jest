const supertest = require("supertest");
const app = require("../app");

describe("should testar o get", () => {
  it("testing get", async () => {
    const response = await supertest(app).get("/10/5");
    expect(response.statusCode).toEqual(200);
    expect(Number(response.text)).toEqual(10 - 5);
  });
  it("testing get with return 0", async () => {
    const response = await supertest(app).get("/10/15");
    expect(response.statusCode).toEqual(200);
    expect(Number(response.text)).toEqual(0);
  });
});
