let expect = require("chai").expect;
let {
  directionUpdateChecker,
  directionUpdater,
  draggerChecker,
  stepTaker,
  scanDirections
} = require("../app");

describe("directionUpdateChecker()", () => {
  "use strict";
  it("Takes the character L, should return true", () => {
    const actual = directionUpdateChecker("L");
    expect(actual).to.be.true;
  });
  it("Takes the character R, should return true", () => {
    const actual = directionUpdateChecker("R");
    expect(actual).to.be.true;
  });
  it("Takes the character ' ', should return false", () => {
    const actual = directionUpdateChecker(" ");
    expect(actual).to.be.false;
  });
  it("Takes the character 1, should return false", () => {
    const actual = directionUpdateChecker("1");
    expect(actual).to.be.false;
  });
  it("Takes the character +, should return false", () => {
    const actual = directionUpdateChecker("+");
    expect(actual).to.be.false;
  });
});

describe("draggerchecker()", () => {
  "use strict";
  it("Takes the character L, should return false", () => {
    const actual = draggerChecker("L");
    expect(actual).to.be.false;
  });
  it("Takes the character R, should return false", () => {
    const actual = draggerChecker("R");
    expect(actual).to.be.false;
  });
  it("Takes the character N, should return true", () => {
    const actual = draggerChecker("N");
    const expected = "N";
    expect(actual).to.eql(expected);
  });
  it("Takes the character S, should return true", () => {
    const actual = draggerChecker("S");
    const expected = "S";
    expect(actual).to.eql(expected);
  });
  it("Takes the character E, should return true", () => {
    const actual = draggerChecker("E");
    const expected = "E";
    expect(actual).to.eql(expected);
  });
  it("Takes the character W, should return true", () => {
    const actual = draggerChecker("W");
    const expected = "W";
    expect(actual).to.eql(expected);
  });
  it("Takes the character ' ', should return false", () => {
    const actual = draggerChecker(" ");
    expect(actual).to.be.false;
  });
});

describe("directionUpdater()", () => {
  "use strict";
  it("Takes the character L when facing N, should return W", () => {
    const actual = directionUpdater("N", "L");
    const expected = "W";
    expect(actual).to.eql(expected);
  });
  it("Takes the character R when facing N, should return E", () => {
    const actual = directionUpdater("N", "R");
    const expected = "E";
    expect(actual).to.eql(expected);
  });
  it("Takes the character L when facing S, should return E", () => {
    const actual = directionUpdater("S", "L");
    const expected = "E";
    expect(actual).to.eql(expected);
  });
  it("Takes the character R when facing S, should return W", () => {
    const actual = directionUpdater("S", "R");
    const expected = "W";
    expect(actual).to.eql(expected);
  });
  it("Takes the character L when facing W, should return S", () => {
    const actual = directionUpdater("W", "L");
    const expected = "S";
    expect(actual).to.eql(expected);
  });
  it("Takes the character R when facing W, should return N", () => {
    const actual = directionUpdater("W", "R");
    const expected = "N";
    expect(actual).to.eql(expected);
  });
  it("Takes the character L when facing E, should return N", () => {
    const actual = directionUpdater("E", "L");
    const expected = "N";
    expect(actual).to.eql(expected);
  });
  it("Takes the character R when facing E, should return S", () => {
    const actual = directionUpdater("E", "R");
    const expected = "S";
    expect(actual).to.eql(expected);
  });
});

describe("stepTaker()", () => {
  "use strict";
  it("Takes a + from (0,0) facing N, returns (0,1)", () => {
    const actual = stepTaker('+', 'N', [0,0]);
    const expected = [0,1];
    expect(actual).to.eql(expected);
  });
  it("Takes a - from (3,-2) facing W, returns (3,-1)", () => {
    const actual = stepTaker('-', 'W', [3,-2]);
    const expected = [4,-2];
    expect(actual).to.eql(expected);
  });
});


describe("scanDirections()", () => {
  "use strict";
  it("Scans a file and returns the proper string", async () => {
    const path = "./data/normalTest1.txt";
    const expected = "Final coordinates: [4,0]. Final direction: E";
    const actual = await scanDirections(path);
    expect(actual).to.eql(expected);
  });
  it("Scans a file and returns the proper string", async () => {
    const path = "./data/normalTest2.txt";
    const expected = "Final coordinates: [-4,-3]. Final direction: N";
    const actual = await scanDirections(path);
    expect(actual).to.eql(expected);
  });
  it("Scans a file and returns the proper string", async () => {
    const path = "./data/advancedTest1.txt";
    const expected = "Final coordinates: [2,1]. Final direction: E";
    const actual = await scanDirections(path);
    expect(actual).to.eql(expected);
  });
  it("Scans a file and returns the proper string", async () => {
    const path = "./data/advancedTest2.txt";
    const expected = "Final coordinates: [1,2]. Final direction: S";
    const actual = await scanDirections(path);
    expect(actual).to.eql(expected);
  });
  it("Scans a file and returns the proper string", async () => {
    const path = "./data/customTest1.txt";
    const expected = "Final coordinates: [0,5]. Final direction: N";
    const actual = await scanDirections(path);
    expect(actual).to.eql(expected);
  });
});
