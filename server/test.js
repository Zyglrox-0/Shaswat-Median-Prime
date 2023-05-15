/*
@Author Shaswat Sharma
*/

const server = require("./index.js");
const supertest = require("supertest");
const requestWithSupertest = supertest(server);
/*
Testing route function for finding the median which includes two values for Median Primes under 10
*/
describe("POST /api", () => {
    it("should return array of 3,5 of median prime for less than 10", async () => {
      const res = await requestWithSupertest.post("/api/").send({
        Number: 10
      });
      expect(res.statusCode).toBe(200);
      expect(res.body).toStrictEqual({"result": [3,5]});
    });
  });
/*
Testing route function for finding the median which includes one value for Median Prime under 13
*/
describe("POST /api", () => {
    it("should return array of 1 prime number for median less than 13", async () => {
      const res = await requestWithSupertest.post("/api/").send({
        Number: 13
      });
      expect(res.statusCode).toBe(200);
      expect(res.body).toStrictEqual({"result": [5]});
    });
  });
/*
Testing large number input of where input n >10000
*/  
describe("POST /api", () => {
    it("Testing set of median primes over 100 thousand", async () => {
      const res = await requestWithSupertest.post("/api/").send({
        Number: 100000
      });
      expect(res.statusCode).toBe(200);
      expect(res.body).toStrictEqual({"result": [46399,46411]});
    });
  });
