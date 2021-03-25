const User = require('../../models/user');
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/testclothingstore';

beforeAll(async () => {
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });
});
afterAll(async () =>{
    await mongoose.connection.close();
});


describe('User Schema Test', () => {
    it('should be able to add new user', async () => {
        const email={
            'email':"sabbukhadka75@gmail.com",
        };
        return User.create(email)
        .then((email) =>{
            expect(email.email).toMatch("sabbukhadka75@gmail.com");
        });
    });

    
    it("should delete the User", async () => {
        let user = await User.findOneAndDelete({
            'email': 'khadka.sabbu5775@gmail'
        });
       // expect(user.email).toMatch('khadka.sabbu5775@gmail');
    })
});