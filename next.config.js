// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig

// for diffrent phases :developmentt/production

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    // REMEMBER!!! after saving /chnaging something in the next.config.js file ' always exit server and re run dev
    return {
      env: {// In the connection string i would put 2 diffrent db/clusters/collections in order to not effect my real db while in development
        mongodb_connection: 'mongodb+srv://silbereytan:fliy6LKZZUU7s9pJ@cluster0.46v10av.mongodb.net/?retryWrites=true&w=majority'
      }
    }
  }
  return {
    env: {// In the connection string i would put 2 diffrent db/clusters/collections in order to not effect my real db while in development
      mongodb_connection: 'mongodb+srv://silbereytan:fliy6LKZZUU7s9pJ@cluster0.46v10av.mongodb.net/?retryWrites=true&w=majority'
    }
  }
}

