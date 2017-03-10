'use strict'

const Service = require('trails/service')

/**
 * @module DestinationService
 * @description TODO document Service
 */
module.exports = class DestinationService extends Service {

  create (destination) {
    const knex = this.app.packs.knex.stores.dev.knex

    // generate view_token and edit_token using crypto
    // https://nodejs.org/api/crypto.html#crypto_crypto_randombytes_size_callback
    //
    // destination.view_token = crypto.randomBytes....
    // destination.edit_token = crypto.randomBytes....

    return knex('destination').insert(destination)
  }

  find (criteria) {
    const knex = this.app.packs.knex.stores.dev.knex
    const { view_token, edit_token } = criteria

    return Promise.all([
      knex('destination').select().where({ view_token }),
      knex('destination').select().where({ edit_token })
    ])
  }

}

