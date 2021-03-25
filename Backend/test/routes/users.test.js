const axios = require("axios");

const baseurl = "http://localhost:8080/users";

describe("Users Route Test", () => {
    let token;
    test("sign up of new user", () => {
        return axios
            .post(baseurl + "/register", {
               
                email: 'sameerkhadka@gmail.com',
                password: 'sameerkhadka5775'
            })
            .then(response => {
                expect(response.data.status).toMatch("Signup success!");
            })
            .catch(err => { });
    });

    test("login of existing user", () => {
        return axios
            .post(baseurl + "/login", {
                email: "sameerkhadka@gmail.com",
                password: "sameerkhadka5775"
            })
            .then(response => {
                token = response.data.token;
                expect(response.status).toBe(200);
                expect(response.data.status).toMatch("Login Successful!");
            })
            .catch(err => { });
    });
});
