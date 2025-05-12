import { test, expect } from '@playwright/test';

test('should display formation titles', async ({ page }) => {
  await page.goto('http://localhost:3000');

  const formationTitles = await page.locator('.card-title').allTextContents();
  expect(formationTitles).toContain('Formation Assu-CRM');
  expect(formationTitles).toContain('Formation Informatisation Assu');
});