# Meu Projeto — PIE 2026.2

Projeto Integrador de Extensão (2026.2).

## Stack

- **Frontend:** Next.js + TypeScript
- **Backend:** Python (FastAPI)
- **Banco de dados:** Supabase (plano gratuito)
- **Deploy:** Vercel (frontend) — a definir (backend)

## Estrutura do repositório

```
.
├── frontend/     # aplicação Next.js (TypeScript)
├── backend/      # API em Python (FastAPI)
├── docs/         # documentação do projeto
└── .github/      # workflows de CI e keep-alive do Supabase
```

## Como rodar localmente

### Frontend

```bash
cd frontend
npm install
cp .env.example .env.local   # preencha as variáveis
npm run dev
```

### Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate     # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env         # preencha as variáveis
uvicorn app.main:app --reload
```

## Variáveis de ambiente

Veja `frontend/.env.example` e `backend/.env.example` para a lista completa. Nenhum valor real deve ser commitado — use os *Secrets* do GitHub Actions para CI/CD.

## Estratégia de branches

| Branch  | Uso |
|---------|-----|
| `back`  | Desenvolvimento do backend (Python/FastAPI) |
| `front` | Desenvolvimento do frontend (Next.js/TS) |
| `teste` | Integração — recebe merge de `back` e `front` para validar juntos |
| `main`  | Versão estável e funcional do projeto (protegida, só via PR a partir de `teste`) |

Fluxo sugerido:

```
back  ──┐
        ├──> teste ──> main
front ──┘
```

Recomenda-se ativar proteção de branch em `main` e `teste` (Settings → Branches): exigir Pull Request e pelo menos 1 revisão antes do merge.

## Keep-alive do Supabase

O plano gratuito do Supabase pausa o projeto após um período de inatividade. O workflow `.github/workflows/keep-alive.yml` faz uma requisição leve semanal para manter o banco ativo — configure os secrets `SUPABASE_URL` e `SUPABASE_ANON_KEY` no repositório (Settings → Secrets and variables → Actions).

## Contribuindo

1. Crie uma branch a partir de `front` ou `back` conforme a parte em que for trabalhar: `feature/nome-da-tarefa`
2. Abra um PR para a branch correspondente (`front` ou `back`)
3. Depois de validado, `front` e `back` são integrados em `teste`
4. Quando `teste` estiver estável, abre-se PR de `teste` para `main`
