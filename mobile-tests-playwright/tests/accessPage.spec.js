import { test, expect} from '@playwright/test';

test('Acessar página inicial', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
    await expect(page.locator('#login-button')).toBeVisible();

});