# Todo Monorepo (Express + Next.js)

Este projeto contém um backend em Express e um frontend em Next.js com testes automatizados e 3 pipelines no GitHub Actions:

1. **CI** — Executa testes e cria release.
2. **CI + SSH** — Testes + deploy remoto via SSH (com PM2).
3. **CI + Docker** — Testes + build Docker e deploy containerizado.

## Rodar localmente
```bash
cd backend && npm install && npm start
cd frontend && npm install && npm run dev
```

## Secrets necessários
- `SSH_HOST` — Host remoto.
- `SSH_USER` — Usuário.
- `SSH_KEY` — Chave privada SSH.
