module.exports = {
  ci: {
    collect: {
      staticDistDir: './',
    },
    assert: {
      preset: 'lighthouse:no-pwa',
    },
  },
};
