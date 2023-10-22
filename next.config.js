const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
})


module.exports = {
    images: {
      domains: ['menu-back.prolabagency.com'],
    },
  };

