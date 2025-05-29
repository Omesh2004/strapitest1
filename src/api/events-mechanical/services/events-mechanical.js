'use strict';

/**
 * events-mechanical service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::events-mechanical.events-mechanical');
