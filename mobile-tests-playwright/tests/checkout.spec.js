import { test, expect } from '@playwright/test';
import { gerarUsuario } from '../utils/fakeData';

test('Finalizar compra com dados fake', async ({ page }) => {

    const usuario = gerarUsuario();

    await page.goto('https://www.saucedemo.com/');

    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');

    await page.click('#login-button');

    await page.click('#add-to-cart-sauce-labs-backpack');

    await page.click('.shopping_cart_link');

    await page.click('#checkout');

    await page.fill('#first-name', usuario.nome);
    await page.fill('#last-name', usuario.sobrenome);
    await page.fill('#postal-code', usuario.cep);

    await page.click('#continue');
    await page.click('#finish');

     await expect(page.locator('.complete-header'))
        .toContainText('Thank you for your order');

  console.log(usuario);

});