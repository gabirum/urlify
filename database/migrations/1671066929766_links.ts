import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'links'

  public async up() {
    void this.schema.createTable(this.tableName, table => {
      table.binary('id', 8).primary()

      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE').nullable()

      table.text('original_link')
      table.integer('access')

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    void this.schema.dropTable(this.tableName)
  }
}
