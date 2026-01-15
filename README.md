

# Pop-up Feedback

Projeto de um pop-up de feedback com frontend em React e backend em Node.js, permitindo o envio de feedbacks contendo tipo, comentário e screenshot, com persistência em banco de dados via Prisma ORM.

Este projeto foi retomado após alguns anos sem manutenção e passou por ajustes para voltar a funcionar corretamente.

---

## 📂 Estrutura do projeto

```
pop-up_feedback/
├─ server/        # Back-end
│    ├─ prisma/
│    │    ├─ migrations/
│    │    └─ schema.prisma
│    │
│    ├─ src/
│    │    ├─ adapters/
│    │    ├─ repositories/
│    │    ├─ use-cases/
│    │    ├─ prisma.ts
│    │    ├─ routes.ts
│    │    └─ server.ts
│    │
│    ├─ package-lock.json
│    ├─ package.json
│    └─ tsconfig.json
│
├─ web/           # Front-end
│    ├─ src/
│    │    ├─ assets/
│    │    ├─ components/
│    │    ├─ App.css
│    │    ├─ App.tsx
│    │    ├─ global.css
│    │    ├─ main.tsx
│    │    └─ vite-env.d.ts
│    │
│    ├─ index.html
│    ├─ package-lock.json
│    ├─ package.json
│    ├─ postcss.config.js
│    ├─ tailwind.config.js
│    ├─ tsconfig.json
│    ├─ tsconfig.node.json
│    └─ vite.config.ts
│
├─ .gitignore
├─ LICENSE.md
└─ README.md
```

---


## 🛠️ Tecnologias utilizadas

* Node.js `v16.15.0`
* Express `v4.18.1`
* Prisma `v5.10.0`
* TypeScript `v4.6.4`
* Jest `v28.1.0`
* TailwindCSS `v3.0.24`
* Vite `v2.9.7`
* React `v18.0.0`


> ⚠️ O projeto foi validado com Node.js 16. Versões mais recentes não foram testadas.

---

## ⚙️ Configuração do ambiente

### 📥 Clonar o repositório

```bash
git clone https://github.com/BrunadeMoura/pop-up_feedback.git
```

### 🔐 Criar o arquivo .env

O arquivo .env não está versionado e deve ser criado manualmente.


No diretório `server/`, crie um arquivo chamado `.env`, o conteúdo deve ser parecido com um dos exemplos abaixo:

Exemplo 1:
```
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco"
```

Exemplo 2, somente para teste:
```
DATABASE_URL="file:./dev.db"
```

Ajuste a URL conforme o banco de dados utilizado (PostgreSQL, MySQL, SQLite etc).

### 🧩 Instalar as dependências

Dentro dos diretórios `server` e `web`, execute o comando:
```
npm install
```

Durante a instalação podem aparecer warnings relacionados a versões do Node.
Esses avisos não impedem a execução do projeto.

### 🧪 Gerar o Prisma Client

No  diretório `server`, execute os comandos:
```
npm install prisma@5.10.0 --save-dev
npm install @prisma/client@5.10.0

npx prisma generate
npx prisma db push
```

## ▶️ Executando o projeto

Em um terminal, na pasta server, utilize o comando abaixo para iniciar o servidor em modo desenvolvimento:
```
npm run dev
```

Saída esperada:
```
> server@1.0.0 dev
> ts-node-dev src/server.ts

[INFO] 16:26:58 ts-node-dev ver. 1.1.8 (using ts-node ver. 9.1.1, typescript ver. 4.6.4)
servidor rodando na porta 3333
```

Em outro terminal, na pasta web, utilize o comando abaixo para iniciar o front-end e ter como acessar via local host:
```
npm run dev
```

Saida esperada:
```
http://localhost:3000
```

ou na porta indicada pelo Vite.


## 🔌 Endpoint disponível

### 📝 Criar feedback

```
POST /feedbacks
```

Corpo da requisição (JSON):

```json
{
  "type": "BUG | IDEA | OTHER",
  "comment": "Texto do feedback",
  "screenshot": "base64 ou null"
}
```

---

## ✅ Funcionamento do fluxo

1. Usuário seleciona o tipo de feedback;
2. Preenche o comentário e (opcionalmente) o screenshot;
3. Ao clicar em **Enviar feedback**:
   * o botão é desabilitado;
   * o texto muda para “Enviando…”;
4. O feedback é enviado ao backend e salvo no banco de dados;
5. A tela de sucesso é exibida.

---

## 📌 Possíveis melhorias futuras

* Feedback visual em caso de falha no envio
* Reabilitar botão se falhar
* Funcionar com o Node.js >=18
* Prisma recente
* TypeScript recente
* Validar o funcionamento em dispositivos menores, como mobile
* Testes automatizados de:
    * criação de feedback
    * validação de campos
* Deploy via GitHub Pages

---

## 📚 Referência

Projeto desenvolvido durante a semana da 8º edição do evento **NLW Return**, da @rocketseat.

---

## 📄 Licença
Este projeto está sob a licença MIT.

Isso significa que você pode usar, copiar, modificar e distribuir este código livremente, desde que mantenha os créditos do autor original.

Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.