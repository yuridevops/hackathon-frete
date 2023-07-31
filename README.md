# Antecipacao de Saldo para o Motorista

Este projeto é uma aplicação web responsiva que foi criada para permitir ao usuário a antecipação de saldo através do fluxo de viagens do Motorista no aplicativo da fretebras.

![image](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![image](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)
![image](https://img.shields.io/badge/styled--components-DB7093?logo=styled-components&logoColor=white)

Esta aplicação simula o momento em que um motorista que tenha sido aprovado para antecipação de crédito, visualiza os fretes em andamento e solicita um adiantamento.

É necessário informar as variaveis de ambiente para simular a tela de um caminhoneiro especifico, e apontar para o endereço da API, conforme o exemplo abaixo:

```bash
GENERATE_SOURCEMAP=false
REACT_APP_URL_ANTECIPATION=http://localhost:3333
REACT_APP_URL_ANTECIPATION_PERSON=447839
```

## Running locally ▶️

#### Clone the project

```bash
  git clone git@github.com:yuridevops/hackathon-frete.git
```

Go to the project directory

```bash
  cd hackathon-frete
```

Install dependencies

```bash
  yarn install
```

#### Start the project with backend

```bash
  yarn start
```

or

```bash
  npm start
```

Access standalone remote application: `http://localhost:3000/`

## Running Lint

To run lint, run the following command

```bash
  yarn lint
```

## Checklist Author :book:

[X] Design system

[ ] Make the project more responsive

[ ] Achieve reasonable test coverage

## Related

Here are some related projects

[Hackathon Frete API](https://github.com/yuridevops/hackathon-frete-api/)
<br/>

## Licence

[ISC](https://www.isc.org/licenses/)
