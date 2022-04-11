
<p align="center">
  <img alt="dtmoney gif" src=".github/ignews.gif" />
</p>

## 📖 Sobre

> <b>ig.news</b> é o terceiro projeto criado no chapter III da trilha de React do Ignite da [Rocketseat](https://github.com/Rocketseat). O projeto consiste em uma aplicação (JAMStack) de assinatura de conteúdo de texto (posts). Desenvolvido utilizando APIs externas como Stripe (controle de pagamento), FaunaDB (como banco de dados) e Prismic (CMS).

</br>

## ⚙ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [FaunaDB](https://fauna.com/)'
- [Axios](https://github.com/axios/axios)
- [Prismic](https://prismic.io/)
- [Stripe](https://stripe.com/)
- [Sass](https://sass-lang.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

</br>

## 👷 Como executar 🚀

- Clone o repositório
```
git clone https://github.com/ericlys/ignite_react-js.git
```
- Entre na pasta do projeto
```
cd 03-ignews
```
- Crie um arquivo .env.local e configure as váriaveis de ambiente
```
# Stripe
STRIPE_API_KEY=
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=
STRIPE_API_PRICE_KEY=
STRIPE_WEBHOOK_SECRET=
STRIPE_SUCESS_URL=
STRIPE_CANCEL_URL=
# Github
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
# FaunaDB
FAUNADB_KEY=
# Prismic CMS
PRISMIC_ENDPOINT=
PRISMIC_ACCESS_TOKEN=
```
- Instale as dependências
```
yarn
```
- Para ouvir os webhooks do Stripe execute o stripe_cli (somente em modo desenvolvimento)
```
stripe listen --forward-to localhost:3000/api/webhooks
```
- Inicie o servidor
``` 
yarn start
```
- Acesse no seu navegador
```
http://localhost:3000
```
