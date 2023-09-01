const request = require("supertest");

const url = "http://localhost:3000";

describe("CRUD API Tests", () => {
  it("should save a new video", () => {
    const payload = {
      id: "9bZkp7q19f0",
      title: "My Video",
      description: "This is a video",
      url: "https://www.youtube.com/watch?v=9bZkp7q19f0",
      thumbnail: "https://i.ytimg.com/vi/9bZkp7q19f0/hqdefault.jpg",
    };

    return request(url)
      .post("/api/videos")
      .send(payload)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(payload);
      });
  });

  it("should get all videos", () => {
    return request(url)
      .get("/api/videos")
      .expect(200)
      .then((response) => {
        expect(response.body.length).toBe(1);
      });
  });

  it("should get a video by id", () => {
    return request(url)
      .get("/api/videos/9bZkp7q19f0")
      .expect(200)
      .then((response) => {
        expect(response.body.id).toBe("9bZkp7q19f0");
      });
  });

  it("should update a video by id", () => {
    return request(url)
      .delete("/api/videos/9bZkp7q19f0")
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({});
      });
  });
});
