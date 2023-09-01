const request = require("supertest");

const url = "https://webhook.site/ecece290-1ccf-4f8f-bae0-7771cc65d7a9";

describe("Server Smoke Tests", () => {
  it("should be alive", () => {
    return request(url).get("/").expect(200);
  });
});
