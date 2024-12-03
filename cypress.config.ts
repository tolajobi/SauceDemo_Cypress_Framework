import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
  e2e: {
    // Configure retries
    retries: {
      runMode: 2, // Retries during `cypress run`
      openMode: 0, // No retries during `cypress open`
    },

    // Support file configuration
    //supportFile: "cypress/support/cypress.config.ts",

    // Conditional spec pattern based on the branch
    specPattern: process.env.BRANCH === "specific-branch"
      ? "custom/path/**/*.feature"
      : "cypress/e2e/*.feature",

    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      // Add Cucumber Preprocessor plugin
      await addCucumberPreprocessorPlugin(on, config);

      // Create bundler with esbuild plugin
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      // Set up file preprocessor
      on("file:preprocessor", async (file) => {
        file.shouldWatch = !config.isTextTerminal;
        return await bundler(file);
      });

      // Return the modified config
      return config;
    },
  },
});
