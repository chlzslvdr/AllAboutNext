const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: process.env.MONGODB_USERNAME,
        mongodb_password: process.env.MONGODB_PASSWORD,
        mongodb_cluster: process.env.MONGODB_CLUSTER,
        mongodb_database: "contact-dev",
      },
    };
  }
  return {
    reactStrictMode: true,
    env: {
      mongodb_username: process.env.MONGODB_USERNAME,
      mongodb_password: process.env.MONGODB_PASSWORD,
      mongodb_cluster: process.env.MONGODB_CLUSTER,
      mongodb_database: "contact",
    },
  };
};
