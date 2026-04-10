// @ts-check
import { test, expect } from 'playwright-test-coverage';

test('counter starts at 0', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading')).toHaveText('Counter: 0');
});

test('counter increments on button click', async ({ page }) => {
  await page.goto('/');
  const button = page.getByRole('button', { name: 'Increment' }).nth(0);

  await button.click();
  await expect(page.getByRole('heading')).toHaveText('Counter: 1');

  await button.click();
  await expect(page.getByRole('heading')).toHaveText('Counter: 2');

  await button.click();
  await expect(page.getByRole('heading')).toHaveText('Counter: 3');
});
