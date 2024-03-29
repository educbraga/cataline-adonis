import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'
import { CherryPick } from '@ioc:Adonis/Lucid/Model'

export default class Post extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public content: string

  @column({serializeAs: null})
  public authorId: number

  @belongsTo(() => User, {foreignKey: 'authorId'})
  public author: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true, serialize: (value: DateTime) => {
      return value.toFormat('dd/MM/yyyy HH:mm:ss')
    } 
  })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serialize: (value: DateTime) => {
      return value.toFormat('dd/MM/yyyy HH:mm:ss')
    } 
  })
  public updatedAt: DateTime

  public serialize(cherryPick?: CherryPick) {
    return {
      ...this.serializeAttributes(cherryPick?.fields, false),
      ...this.serializeComputed(cherryPick?.fields),
      ...this.serializeRelations({ author: {
        fields: ['id', 'email', 'firstName']
        // fields: { omit: ['id', 'email', 'firstName'] }
      } }, false)
  }
}
}
