'use strict';

/**
 * articles-mechanical service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::articles-mechanical.articles-mechanical');
