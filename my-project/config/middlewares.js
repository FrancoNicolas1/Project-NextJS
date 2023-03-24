module.exports = [
  "strapi::errors",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            "ecommerce-strapi-games-franco.s3.amazonaws.com",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            "ecommerce-strapi-games-franco.s3.amazonaws.com",
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];
