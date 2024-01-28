const AuthController = () => import('#controllers/auth_controller')
import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

router.post('/auth/login', [AuthController, 'login'])
router.post('/auth/register', [AuthController, 'register'])
router.get('/auth/email/verify/:email/:id', [AuthController, 'verifyEmail']).as('verifyEmail')

router.post('/auth/password/forgot', [AuthController, 'forgotPassword'])
router
    .post('/auth/password/reset/:id/:token', [AuthController, 'resetPassword'])
    .as('resetPassword')

router
    .group(() => {
        // routes which require authentication
        router.get('/auth/user', [AuthController, 'user'])
        router.post('/auth/logout', [AuthController, 'logout'])
        router.post('/auth/email/verify/resend', [AuthController, 'resendVerificationEmail'])

        router
            .group(() => {
                // routes which require verified email
            })
            .use(middleware.verifiedEmail())
    })
    .use(
        middleware.auth({
            guards: ['api'],
        })
    )
