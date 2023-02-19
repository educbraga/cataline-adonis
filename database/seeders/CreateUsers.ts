import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class CreateUsersSeeder extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        name: 'Eduardo Braga',
        email: 'admin@email.com',
        password: 'secret',
        role: 'admin',
      },
      {
        name: 'João da Silva',
        email: 'normal@email.com',
        password: 'secret',
        role: 'normal',
      },
    ])
  }
}
