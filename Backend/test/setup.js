
const mongoose = require('mongoose');

beforeAll((done)=>{
    mongoose.connect(global.__MONGO_URI__,{
        useNewUrlParser:true,
            useUnifiedTopology: true,
         useCreateIndex:true
         }).then((db)=>{
             console.log('connected ...');
             done();
           }).catch((err)=>{
             console.error(err);
             process.exit(1);
         })
        })
//tear down
afterAll((done)=>{
    mongoose.disconnect().then(()=>{
        console.log('Disconnecting ...');
        done();
    });
})