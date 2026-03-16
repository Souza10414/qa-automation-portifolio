# QA Automation Portfolio

Projeto de automação de testes desenvolvido para demonstrar habilidades em testes Web e testes de API.

# Tecnologias utilizadas

- Playwright
- Python
- Behave (BDD)
- Requests
- Faker
- GitHub Actions

# Estrutura do projeto

QA-AUTOMATION-PORTIFOLIO
│
├ features
│ users.feature
│
├ steps
│ api_steps.py
│
├ mobile-tests-playwright
│ pages
│ tests
│ utils
│
└ playwright.config.js


# Tipos de testes implementados

# Testes de API

Automação de API utilizando Python + Behave.

Cenários implementados:

- Buscar usuário (GET)
- Criar usuário (POST)
- Atualizar usuário (PUT)
- Deletar usuário (DELETE)

# Testes Web

Automação utilizando Playwright com padrão Page Object Model.

Testes implementados:

- Login
- Acesso à página
- Adicionar produto
- Checkout

# Como rodar os testes

# Rodar testes de API

Instalar dependências:

pip install behave requests faker
Executar testes:


behave

# Rodar testes Playwright

Instalar dependências:
npm install

Executar testes:
npx playwright test

# Autor

Wellison Souza Oliveira 
