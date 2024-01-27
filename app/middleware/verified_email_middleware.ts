import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class VerifiedEmailMiddleware {
    async handle({ auth, response }: HttpContext, next: NextFn) {
        if (!auth.isAuthenticated) {
            response.unauthorized({ error: 'Email is not verified.' })
        }

        if (!auth?.user?.emailVerifiedAt) {
            response.unauthorized({ error: 'Email is not verified.' })
        }

        return await next()
    }
}
