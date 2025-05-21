const index = require("../index");
describe("index", () => {
  it("should subtract rigth", () => {
    expect(index.subtraction(10, 3)).toEqual(7);
  });
  it("should return 0 if (b > a)", () => {
    expect(index.subtraction(10, 15)).toEqual(0);
  });
});
