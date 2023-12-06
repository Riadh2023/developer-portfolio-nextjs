const dotenv = require('dotenv');

dotenv.config();
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: [
      'ibb.co',
    ],
  },
};
module.exports = nextConfig;
