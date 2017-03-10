/**
 * Database Configuration
 * (app.config.database)
 *
 * Configure the ORM layer, connections, etc.
 *
 * @see {@link http://trailsjs.io/doc/config/database}
 */

'use strict'

module.exports = {

  /**
   * Define the database stores. A store is typically a single database.
   *
   * Use the SQLite3 by default for development purposes.
   *
   * Set production connection info in config/env/production.js
   */
  stores: {

    /**
     * Define a store called "local" which uses SQLite3 to persist data.
     *
     * To use this store, uncomment the "sqlitedev" store section below, and
     * run "npm install --save waterline-sqlite3"
     */

    dev: {
      client: 'pg',
      connection: {
        host: process.env.UBUILT_PG_GEO_HOST,
        database: 'osm',
        user: process.env.UBUILT_PG_GEO_USER,
        password: process.env.UBUILT_PG_GEO_PASSWORD
      }
    }
  },

  models: {
    defaultStore: 'dev',
    migrate: 'create'
  }
}
