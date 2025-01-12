import Router from 'koa-router'
import auth from '../middleware/auth'
import TagController from '../controllers/tag'

const controller = new TagController()
const route = new Router()

route.post('/api/tag', auth.isUser, async ctx => {
    await controller.createTag(ctx)
})

route.get('/api/tag/:slug', async ctx => {
    await controller.getTag(ctx)
})

route.delete('/api/tag/:slug', auth.isAdmin, async ctx => {
    await controller.deleteTag(ctx)
})

export default route
