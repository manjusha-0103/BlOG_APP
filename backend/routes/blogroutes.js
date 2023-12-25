const express = require('express');
const {protect} = require("../middleware/authMiddleware")
const {makeBlog,
    postRespectiveBlog,
    getallBlog,
    getABlog,
    deleteBlog,
    updateBlog
} = require("../controller/blogController")



const router = express.Router()

router.post('/create-blog',protect, makeBlog);
router.get('/respectBlog',protect,postRespectiveBlog);
router.get('/',getallBlog)
router.get('/blog/:id',getABlog)

router.put('/update/:id',protect,updateBlog);
router.delete('/delete/:id',protect,deleteBlog)


module.exports = router