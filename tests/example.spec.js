import { test, expect } from 'playwright-test-coverage';

test('counter increments on button click', async ({ page }) => {
  await page.goto('/');
  const button = page.getByRole('button', { name: 'Increment' }).nth(0);

  await button.click();
  await expect(page.getByRole('heading')).toHaveText('Counter: 1');
});
