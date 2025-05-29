'use strict';

/**
 * announcement-mechanical service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::announcement-mechanical.announcement-mechanical');
