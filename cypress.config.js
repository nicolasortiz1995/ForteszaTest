const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Fortesza Resumen de Pruebas',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    // Configure your E2E tests here
    "defaultCommandTimeout": 15000,
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}",
    "chromeWebSecurity": false,
    "browser": ["chrome", "edge", "firefox"]
  },
})