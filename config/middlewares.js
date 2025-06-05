module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: [
        'https://insti-website.netlify.app',
        'http://localhost:3000',
        'https://beta.iitp.ac.in',  // No trailing slash
        'http://iitp.ac.local'      // No trailing slash
      ],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'], // Add 'OPTIONS'
      headers: ['Content-Type', 'Authorization', 'Accept', 'Origin'], // Explicit headers
      keepHeaderOnError: true, // Ensures CORS headers are sent even on errors
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];