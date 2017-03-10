/**
 * Routes Configuration
 * (trails.config.routes)
 *
 * Configure how routes map to views and controllers.
 *
 * @see http://trailsjs.io/doc/config/routes.js
 */

'use strict'

module.exports = [

  {
    method: 'GET',
    path: '/destination/{id?}',
    handler: 'DestinationController.find'
  }

]
