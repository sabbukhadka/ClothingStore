const Category = require('../../models/category');
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
describe('Category Schema Test', () => {
    it('should be able to add new category', async () => {
        const name={
            'name':"Hoddies",
        };
        return Category.create(name)
        .then((name) =>{
            expect(name.name).toMatch("Hoddies");
        });
        });
        it('should be able to update Category', async () => {
            let cate = await Category.findOne({
                'name': 'Hoddies'
            });
            cate.name = 'Jeans';
            let newCate = await cate.save();
            expect(newCate.name).toBe('Jeans');
        })
    
        it("should delete the User", async () => {
            let cate = await Category.findOneAndDelete({
                'name': 'Jeans'
            });
            expect(cate.name).toMatch('Jeans');
        })
 });

    