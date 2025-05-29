'use strict';

/**
 * events-electrical service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::events-electrical.events-electrical');
