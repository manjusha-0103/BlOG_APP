const User = require("../models/user")
const Blog = require("../models/blog")
const asyncHandler = require('express-async-handler');



const getABlog = asyncHandler(async(req,res)=>{
    try{
        //console.log(req.params.id)
        const id = req.params.id

        const cursor = await Blog.findById(id).populate('author')
        //console.log(cursor)
        if(cursor){
            res.status(201).send({
                success : true,
                msg : "got a blog",
                data : cursor
            })
        }
        else {
            res.status(400).send({
                success : false,
                msg : "not found blog",
                
            })
        }
    }
    catch(error){
        console.log(error)
    }
})

const getallBlog = asyncHandler(async(req,res)=>{
    try{
        const blogs = await Blog.find().populate('author')
        if(blogs){
            res.status(201).send({
                success : true,
                msg : "Got blogs",
                data : blogs
            })
        }
        else{
            res.status(400).send({
                success : true,
                msg : "No Any blog is posted",
                
            })
        }
    }
    catch(error){
        console.log(error)
    }
})

const makeBlog = asyncHandler(async(req,res)=>{
    try{
        //console.log(req.body)
        const {user, title, content} = req.body;
        if(!user || !title ||!content){
            res.status(400).send({
                success : false,
                msg : "required all fields"
            })
        }
        else{
            const cursor = await Blog.create({
                title : title,
                content : content,
                author : user
            })
            if(cursor){
                res.status(200).send({
                    success: true,
                    msg : "Blog is created successfully"
                })
            }
            else{
                res.status(400).send({
                    success: false,
                    msg : "Bad request"
                })
            }
        }
        
    }
    catch(error){
        console.log("eror : ", error)
    }
});


const postRespectiveBlog = asyncHandler(async(req,res)=>{
    try{
        const cursor = await Blog.find({author : req.user.id}).populate('author')
        //console.log(cursor)
        if(cursor){
            const author = await Blog.findById(cursor._id).populate('author')
            //console.log(author)
            //cursor.author = author;
            //console.log(cursor)
            res.status(201).send({
                success : true,
                msg : "fetched data successfully",
                data : cursor
                
            })
        }
        else {
            res.status(200),sned({
                success : false,
                msg : "You haven't created any blog Post"
            })
        }
        
        
    }
    catch(error){
        console.log("eror : ", error)
    }
});

const updateBlog= asyncHandler(async(req,res)=>{
    try{
        console.log(req.body)
        const cursor = await Blog.updateOne(req.body)
        if(cursor){
            res.status(200).send({
                success : true,
                msg : "Blog is updated succefully"
            })
        }
        else{
            res.status(200).send({
                success : false,
                msg : "Blog is not updated succefully"
            })
        }

    }
    catch(error){

    }
})

const deleteBlog= asyncHandler(async(req,res)=>{
    try{
        const id = req.params.id
        console.log(id)
        const cursor = await Blog.findByIdAndDelete(id)
        if(cursor) {
            res.status(200).send({
                success : true,
                msg : "Blog is deleted succesfully"
            })
        }
        else{
            res.status(400).send({
                success : false,
                msg : "something went wrong while deleteing or blog not found in database"
            })
        }

    }
    catch(error){

    }
})

module.exports={
    makeBlog,
    postRespectiveBlog,
    getallBlog,
    getABlog,
    updateBlog,
    deleteBlog
}