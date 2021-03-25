const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const bodyParser = require('body-parser')
const cors = require('cors')
const session = require('express-session')
require('dotenv').config()

require('./config/passport')(passport)

// Database Connection

mongoose.connect('mongodb://localhost:27017/apparelstore',
{ useUnifiedTopology: true, 
    useNewUrlParser: true,
    useCreateIndex:true,
    useNewUrlParser: true })
    .then(() => console.log('Database server connected sucessfully'))
  .catch((err)=> console.log(err)) ;


const app = express()
const PORT = process.env.PORT || 8080


app.use(cors())      //query parameter req.params.id client le pathayeko data server ma  kasari read garne

// body parser 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/uploads', express.static('uploads'))
app.use('/uploads', express.static('./uploads'))


// Express session
app.use(
    session({
        secret: 'bookstoreapp',
        resave: true,
        saveUninitialized: true
    })
)

// Passport 
app.use(passport.initialize())
app.use(passport.session())


// routes handlers
app.use('/user', require('./routes/users'))
app.use('/post', require('./routes/posts'))
app.use('/admin', require('./routes/admin'))

app.get('/', (req, res) => {
    res.send('Server Working!!!')
})

app.use((req,res,next)=>{
    let err = new Error('Not found');
    err.status =404;
    next(err);
    
  })
  app.use((err, req, res, next)=>{
    console.error(err.stack);
    res.status(err.status || 500);
    res.json({
      status:'error',
      message:err.message
    });
  })


app.listen(PORT, console.log('Server started on port: ' + PORT))