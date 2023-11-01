import { defineConfig, devices } from '@playwright/test';

// require('dotenv').config();

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  retries: 1,
  forbidOnly: !!process.env.CI,
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
        ['html'],
        ['list'],
        ['monocart-reporter', {  
          name: "My Dashboard Test Report",
          outputFile: './test-results/report.html'
      }]
  ],
  use: {
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    // Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },
  ],
});
