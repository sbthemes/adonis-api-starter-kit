import { DateTime } from 'luxon'
import { withAuthFinder } from '@adonisjs/auth'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { AccessToken, DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
    uids: ['email'],
    passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder) {
    @column({ isPrimary: true })
    declare id: number

    @column()
    declare email: string

    @column({ serializeAs: null })
    declare password: string

    @column.dateTime()
    declare emailVerifiedAt: DateTime

    @column.dateTime({ autoCreate: true, serializeAs: null })
    declare createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
    declare updatedAt: DateTime | null

    currentAccessToken?: AccessToken

    static authTokens = DbAccessTokensProvider.forModel(User)
}
