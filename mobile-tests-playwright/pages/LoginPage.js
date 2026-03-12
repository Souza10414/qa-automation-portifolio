export class LoginPage {

    constructor(page) {

        this.page = page;
        this.email = '#email';
        this.password = '#password';
        this.loginButton = 'button[type="submit"]';
    }

    async acessar(){

        await this.page.goto('https://www.saucedemo.com/');

    }

    async login(email, senha){

        await this.page.fill(this.email, email);
        await this.page.fill(this.password, senha);
        await this.page.click(this.loginButton);    

    }
}
// Mini documentação.

// page.goto()	abre o site
// page.fill()	preenche um campo
// page.click()	clica em um botão
// expect()	valida o resultado

// rodar os testes:

// entrar na pasta cd  mobile-tests-playwrigth / ls pra confirmar 
// npx playwright test --headed
// npx playwright show-report