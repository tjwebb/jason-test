/**
 * @module Destination
 * @description TODO document Model
 */
module.exports = class Destination extends Model {

  static config () {
    return {
      tableName: 'destination'
    }
  }

  static schema (table) {
    table.increments('id')
    table.text('name')
    table.float('lat')
    table.float('lng')
  }
}
