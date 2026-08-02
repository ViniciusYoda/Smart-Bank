# Smart Bank

Aplicação web responsiva para visualização de saldo e gerenciamento de transações financeiras. O projeto foi construído com React, TypeScript, Vite e styled-components.

## Funcionalidades

- cálculo automático do saldo a partir das entradas e saídas;
- cadastro de transações com descrição, valor, data, categoria e tipo;
- busca por descrição ou categoria;
- filtro de transações por categoria;
- carregamento progressivo do extrato;
- ocultação do saldo;
- temas claro e escuro com preferência salva no navegador;
- interface responsiva e controles acessíveis;
- validação automatizada com Vitest e Testing Library.

> Atualmente as transações permanecem apenas na memória. Ao atualizar a página, os dados retornam ao estado inicial definido em `src/info.ts`.

## Tecnologias

- React 18
- TypeScript 5 em modo estrito
- Vite 7
- styled-components 6
- Vitest, jsdom e React Testing Library

## Pré-requisitos

- Node.js 20.19 ou superior
- npm 10 ou superior

Confira as versões instaladas:

```bash
node --version
npm --version
```

## Instalação e execução

Clone o repositório, acesse a pasta do projeto e instale as dependências:

```bash
npm install
npm run dev
```

O Vite exibirá no terminal o endereço local da aplicação, normalmente `http://localhost:5173`.

## Scripts

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento com atualização automática. |
| `npm start` | Atalho equivalente a `npm run dev`. |
| `npm test` | Executa todos os testes uma vez. |
| `npm run test:watch` | Executa os testes em modo interativo. |
| `npm run build` | Valida o TypeScript e gera a versão de produção em `dist/`. |
| `npm run preview` | Serve localmente o conteúdo gerado em `dist/`. |

## Estrutura do projeto

```text
Smart-Bank/
├── public/                 # Manifesto e arquivos públicos
├── src/
│   ├── assets/images/      # Ícones SVG
│   ├── Components/         # Componentes visuais e funcionais
│   │   ├── Conta/          # Saldo e formulário de transações
│   │   ├── Extrato/        # Busca, filtro e listagem
│   │   └── UI/             # Componentes e tokens compartilhados
│   ├── App.tsx             # Estado central e tema
│   ├── App.test.tsx        # Testes de integração da interface
│   ├── info.ts             # Tipos e dados iniciais
│   └── index.tsx           # Ponto de entrada React
├── index.html              # Entrada HTML do Vite
├── vite.config.ts          # Configuração do Vite e Vitest
└── tsconfig*.json          # Configurações do TypeScript
```

## Modelo de transação

```ts
interface Transaction {
  id: string;
  category: TransactionCategory;
  amount: number;
  date: string;
  description: string;
  direction: "income" | "expense";
}
```

- `amount` é armazenado como número positivo.
- `direction` determina se o valor será somado ou subtraído do saldo.
- `date` utiliza o formato ISO `AAAA-MM-DD`.
- `category` aceita apenas as categorias declaradas em `src/info.ts`.

## Testes e build

Antes de enviar uma alteração, execute:

```bash
npm test
npm run build
```

O build executa primeiro `tsc -b`, impedindo a geração quando houver erros de tipagem.

## Documentação técnica

Consulte [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) para detalhes sobre fluxo de dados, componentes, temas, testes e pontos de extensão.

## Licença

Este repositório ainda não possui uma licença definida.
