import { test, expect } from '@playwright/test';

test('Adicionar produto ao carrinho', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');

  await page.click('#login-button');

  const produtos = [
    '#add-to-cart-sauce-labs-backpack',
    '#add-to-cart-sauce-labs-bike-light',
    '#add-to-cart-sauce-labs-bolt-t-shirt'
  ];

  const produtoAleatorio = produtos[Math.floor(Math.random() * produtos.length)];

  await page.click(produtoAleatorio);

  await page.click('.shopping_cart_link');

  await expect(page.locator('.cart_item')).toBeVisible();

});