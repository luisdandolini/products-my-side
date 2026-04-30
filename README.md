# Fake Store

Aplicação web de listagem de produtos construída com Next.js, consumindo a [Fake Store API](https://fakestoreapi.com). Permite buscar, filtrar e visualizar produtos, além de gerenciar um carrinho de compras.

## Tecnologias

- [Next.js 16](https://nextjs.org/) — App Router, SSG, ISR
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [Lucide React](https://lucide.dev/) — ícones
- [Jest](https://jestjs.io/) + [React Testing Library](https://testing-library.com/)

## Funcionalidades

- Listagem de produtos em grid responsivo
- Busca por nome e filtragem por categoria
- Paginação client-side
- Página de detalhes do produto com produtos relacionados
- Carrinho de compras com Context API (persiste entre páginas)
- Loading skeleton e tratamento de erros
- Página 404 personalizada

## Pré-requisitos

- [Node.js](https://nodejs.org/) >= 18
- [Yarn](https://yarnpkg.com/)

## Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/luisdandolini/products-my-side.git
cd products-my-side
yarn install
```

## Variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```.env.local
NEXT_PUBLIC_API_URL=https://fakestoreapi.com
```

## Rodando o projeto

```bash
yarn dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Testes

```bash
# Rodar todos os testes
yarn test

# Modo watch (re-executa ao salvar)
yarn test:watch
```

## Build

```bash
yarn build
yarn start
```
