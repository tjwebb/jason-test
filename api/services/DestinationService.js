'use strict'

const Service = require('trails/service')

/**
 * @module DestinationService
 * @description TODO document Service
 */
module.exports = class DestinationService extends Service {

  create (destination) {
    const knex = this.app.packs.knex.stores.dev.knex

    return knex('destination').insert(destination)
  }

  find (criteria) {
    const knex = this.app.packs.knex.stores.dev.knex

    return knex('destination').select().where(criteria)
  }

}

