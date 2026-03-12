import { faker } from '@faker-js/faker';

export function gerarUsuario() {

  return {

    nome: faker.person.firstName(),
    sobrenome: faker.person.lastName(),
    email: faker.internet.email(),
    senha: faker.internet.password(),
    cep: faker.location.zipCode()

  };

}