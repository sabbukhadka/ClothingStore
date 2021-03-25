const Post = require('../../models/post');
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


describe('Clothes Schema Test', () => {
    it('should be able to add new clothes', async () => {
        const name={
            'name':"Shirts",
        };
        return Post.create(name)
        .then((name) =>{
            expect(name.name).toMatch("Shirts");
        })

    })
})
 