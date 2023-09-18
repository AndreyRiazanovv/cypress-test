import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.spec.{js,jsx,ts,tsx}" ,
    baseUrl: "http://localhost:4200" ,
    excludeSpecPattern: ["**/2-advanced-examples"]
  },
});
