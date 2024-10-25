const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",

  reporterOptions: {
    reportDir: "cypress/reports", // Diretório onde os relatórios serão gerados
    overwrite: false, // Evita sobrescrever relatórios anteriores
    html: true, // Gera relatórios em HTML
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
