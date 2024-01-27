import User from '#models/user'
import env from '#start/env'
import router from '@adonisjs/core/services/router'
import { BaseMail } from '@adonisjs/mail'

export default class VerifyEmailNotification extends BaseMail {
    from = env.get('MAIL_FROM')
    subject = 'Verify Email Address'

    constructor(private user: User) {
        super()
    }

    prepare() {
        const signedURL = router
            .builder()
            .prefixUrl(env.get('API_URL'))
            .params({ id: this.user.id, email: this.user.email })
            .makeSigned('verifyEmail', {
                expiresIn: '30 minutes',
            })

        const url = `${env.get('EMAIL_VERIFY_PAGE_URL')}?token=${encodeURIComponent(signedURL)}`

        this.message.to(this.user.email).htmlView('emails/verify_email', { url })
    }
}
