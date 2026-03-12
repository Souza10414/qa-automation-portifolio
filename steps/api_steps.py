import requests
from behave import given, when, then
from faker import Faker

fake = Faker()

BASE_URL = "https://jsonplaceholder.typicode.com/users" # URL publíca



# CREATE USER (POST)


@given('que tenho a API para criar usuários')
def step_impl(context):
    context.url = BASE_URL


@when('envio uma requisição POST')
def step_impl(context):

    context.payload = {
        "name": fake.name(),
        "job": fake.job()
    }

    print("Payload:", context.payload)

    context.response = requests.post(context.url, json=context.payload)


@then('o status da criação deve ser 201')
def step_impl(context):
    assert context.response.status_code == 201



# GET USER


@given('que tenho a API para buscar usuários')
def step_impl(context):
    context.url = f"{BASE_URL}/2"


@when('envio uma requisição GET')
def step_impl(context):
    context.response = requests.get(context.url)


@then('o status da busca deve ser 200')
def step_impl(context):
    assert context.response.status_code == 200



# UPDATE USER (PUT)


@given('que tenho a API para atualizar usuários')
def step_impl(context):
    context.url = f"{BASE_URL}/2"


@when('envio uma requisição PUT')
def step_impl(context):

    context.payload = {
        "name": fake.name(),
        "job": fake.job()
    }

    print("Update Payload:", context.payload)

    context.response = requests.put(context.url, json=context.payload)


@then('o status da atualização deve ser 200')
def step_impl(context):
    assert context.response.status_code == 200



# DELETE USER


@given('que tenho a API para deletar usuários')
def step_impl(context):
    context.url = f"{BASE_URL}/2"


@when('envio uma requisição DELETE')
def step_impl(context):
    context.response = requests.delete(context.url)


@then('o status da deleção deve ser 200')
def step_impl(context):
    assert context.response.status_code == 200


# Rodar os testes de API-
# Terminal bash

# Entrar na pasta: cd steps
# Execute: behave