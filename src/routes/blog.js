import Router from 'koa-router'
import auth from '../middleware/auth'
import BlogController from '../controllers/blog'
import upload from '../middleware/upload/addGallery'

const router = new Router()
const controller = new BlogController()

router.post('/api/blog/images', auth.isUser, upload, async (ctx, next) => {
    await controller.blogImages(ctx, next)
})

router.post('/api/blog', auth.isUser, upload, async ctx => {
    await controller.createBlog(ctx)
})

router.get('/api/blog/:id', auth.isUser, async ctx => {
    await controller.getAllUserBlogs(ctx)
})

router.get('/api/getblog/:slug', async ctx => {
    await controller.getBlog(ctx)
})

router.delete(
    '/api/blog/:slug',
    auth.isUser,
    auth.isBlogAuthor,
    async (ctx, next) => {
        await controller.deleteBlog(ctx, next)
    }
)

router.patch(
    '/api/blog/:slug',
    auth.isUser,
    auth.isBlogAuthor,
    upload,
    async (ctx, next) => {
        await controller.updateBlog(ctx, next)
    }
)

router.post('/api/blog/related', async ctx => {
    await controller.getRelatedBlogs(ctx)
})

router.post('/api/blogs', async ctx => {
    await controller.getAllPublishedBlogs(ctx)
})

router.get('/api/blogs/search', async ctx => {
    await controller.search(ctx)
})

router.post(
    '/api/blogs/delete-img/:slug',
    auth.isUser,
    auth.isBlogAuthor,
    async (ctx, next) => {
        await controller.deleteImg(ctx, next)
    }
)

export default router
