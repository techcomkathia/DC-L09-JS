import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    screenshotOnRunFailure: true, // Capturar screenshot automaticamente ao falhar
    screenshotsFolder: 'cypress/screenshots', // Pasta onde armazenar screenshots
    setupNodeEvents(on, config) {
      // implementar node event listeners aqui
    }}
})