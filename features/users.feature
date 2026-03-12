Feature: Testes da API de usuários

Scenario: Buscar usuário
  Given que tenho a API para buscar usuários
  When envio uma requisição GET
  Then o status da busca deve ser 200


Scenario: Criar usuário
  Given que tenho a API para criar usuários
  When envio uma requisição POST
  Then o status da criação deve ser 201


Scenario: Atualizar usuário
  Given que tenho a API para atualizar usuários
  When envio uma requisição PUT
  Then o status da atualização deve ser 200


Scenario: Deletar usuário
  Given que tenho a API para deletar usuários
  When envio uma requisição DELETE
  Then o status da deleção deve ser 200

  