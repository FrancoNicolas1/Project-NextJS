module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: "AKIATN2HQWZJAH7LSCGJ",
        secretAccessKey: "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",
        region: "us-east-1",
        params: {
          Bucket: "ecommerce-strapi-games-franco",
        },
      },
    },
  },
  // ...
});

// module.exports = ({ env }) => ({
//   // ...
//   upload: {
//     config: {
//       provider: "aws-s3",
//       providerOptions: {
//         accessKeyId: env("AKIATN2HQWZJAH7LSCGJ"),
//         secretAccessKey: env("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"),
//         region: env("us-east-1"),
//         params: {
//           Bucket: env("strapi-ecommerce-game"),
//         },
//       },
//     },
//   },
//   // ...
// });
