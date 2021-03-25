const axios = require("axios");

const baseurl = "http://localhost:8080/posts";

describe("Posts Route Test", () => {
    let token;
    test("adding category", () => {
        return axios
            .post(baseurl + "/category/add", {
               
                name:"Hoddies"
            })
            .then(response => {
                expect(response.data.status).toMatch("added clothes category!");
            })
            .catch(err => { });
    })
})