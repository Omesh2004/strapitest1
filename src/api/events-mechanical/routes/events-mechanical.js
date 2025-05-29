'use strict';

/**
 * events-mechanical router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::events-mechanical.events-mechanical');
