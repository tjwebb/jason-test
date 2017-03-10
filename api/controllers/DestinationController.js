'use strict'

const Controller = require('trails/controller')

/**
 * @module DestinationController
 * @description TODO document Controller.
 */
module.exports = class DestinationController extends Controller {

  create (request, reply) {

  }

  find (request, reply) {
    const criteria = request.query
    const { id } = request.params

    if (id) Object.assign(criteria, { id })

    this.app.services.DestinationService.find(criteria)
      .then(reply)
  }

}

