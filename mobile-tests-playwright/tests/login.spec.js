import { test, expect, devices } from '@playwright/test';
import { gerarUsuario } from '../utils/fakeData';

test.use({
  ...devices['iPhone 13']
});

test('login mobile', async ({ page }) => {

  const usuario = gerarUsuario();

  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');

  await page.click('#login-button');

  await expect(page.locator('.title')).toBeVisible();

  console.log(usuario);

});

// Mini documentação.

// page.goto()	abre o site
// page.fill()	preenche um campo
// page.click()	clica em um botão
// expect()	valida o resultado

// rodar os testes:

// entrar na pasta cd  mobile-tests-playwrigth / ls pra confirmar 
//npx playwright test
// npx playwright show-report 
// npx playwright test --headed


// Rodar todos os testes - npx playwright test --headed

// Modo debug quando algo quebra - npx playwright test --debug

// Relatório de testes - npx playwright show-report

// Rodar somente um teste - npx playwright test tests/checkout.spec.js