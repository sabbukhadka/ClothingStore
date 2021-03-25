const router = require('express').Router()
const passport = require('passport')
const multer = require('multer')
const slugify = require('slugify')

const User = require('../models/User')
const Post = require('../models/Post')
const Category = require('../models/Category')


const { forwardAuthenticated, ensureAuthenticated } = require('../config/auth')


// Multer Setup
const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, './uploads')
    },
    filename: (req, file, cb) =>{
        cb(null, file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg'){
        cb(null, true)
    }else{
        cb(null, false)
    }
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 20
    },
    fileFilter: fileFilter
})


//  Post an item 
router.route('/:userid/post').post(upload.single('picture'), (req, res) => {

    const posts = []
    const {name, description, category, price} = req.body
    const picture = req.file.path.replace(/\\/g, '/')

    User.findById(req.params.userid).then(user => {
        if(user.id === '5f4de3497e7c738d43075c3c'){
            const newPost = new Post({
                name,
                picture,
                description,
                category,
                price
            })
        
            categorySlug = slugify(category, {lower: true, strict: true})
        
                // Check if cateory already exists or not
                Category.findOne({slug: categorySlug}).then(data => {
                    if(!data){
                        posts.push(newPost)
        
                        const newCategory = new Category({
                            name: category,
                            slug: categorySlug,
                            posts
                        })
        
                        newCategory.save()
        
                    }else{
                        data.posts.push(newPost)
                        data.save()
                    }
                }).catch(err => res.send(err))
                
            newPost.save().then(post => {
                res.send(post)
            }).catch(err => res.status(500).send('Internal Server error'))

        }else{
            res.send('You are not an admiin to post data')
        }
    }).catch(err => console.log(err))

})


router.route('/:postID/delete').get( (req, res) => {
    Post.findById(req.params.postID).then(post => {
        if(!post){
            res.send('Invalid url!!!')
        }else{
            Category.find().then(data => {
                for(var i = 0; i < data.length; i++){
                    // console.log(data[i])
                    for(var j = 0; j < data[i].posts.length; j++){
                        if(data[i].posts[j].id === post.id){
                            data[i].posts[j].remove()
                            data[i].save()
                            // console.log(data[i].posts[j])
                        }
                    }
                }
                
                post.remove()
                res.send('removed')
            }).catch(err => console.log(err))
            
        }
    }).catch(err => res.send(err))
    
})



router.route('/:postID/edit').post((req, res) => {
    Post.findById(req.params.postID).then(post => {
        
        Category.find().then(data => {
            for(var i = 0; i < data.length; i++){
                // console.log(data[i])
                for(var j = 0; j < data[i].posts.length; j++){
                    if(data[i].posts[j].id === post.id){
                        data[i].posts[j].name = req.body.name
                        data[i].posts[j].description = req.body.description
                        data[i].posts[j].category = req.body.category
                        data[i].posts[j].price = req.body.price
                        data[i].save()
                        // console.log(data[i].posts[j])
                    }
                }
            }
            
            post.name = req.body.name
            post.description = req.body.description
            post.category = req.body.category
            post.price = req.body.price



            post.save().then(newpost => res.send(newpost))
        }).catch(err => console.log(err))

    }).catch(err => res.status(500).send('Server Error'))
})


module.exports = router