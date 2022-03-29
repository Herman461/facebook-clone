import Router from 'express'
import * as controller from '../controllers/user-auth.controller.js'

const router = new Router()

router.post('/signup', controller.signup)
router.post('/login', controller.login)
router.get('/users', controller.getAll)

export default router
