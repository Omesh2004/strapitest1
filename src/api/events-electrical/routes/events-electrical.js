'use strict';

/**
 * events-electrical router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::events-electrical.events-electrical');
