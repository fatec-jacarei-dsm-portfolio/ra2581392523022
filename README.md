# Portfolio - Lucas Cecon

Um portfólio moderno desenvolvido com Vite + React, Tailwind CSS, animações GSAP e suporte a múltiplos idiomas (EN/PT). O projeto apresenta meus principais trabalhos, habilidades e reconhecimentos, com navegação fluida e responsiva, pronto para deploy no GitHub Pages.

## ✨ Demonstração

> (Adicione aqui um link para o site publicado, se houver)

## 🚀 Tecnologias Utilizadas

- **Vite** + **React** (JavaScript + JSX)
- **Tailwind CSS** (PostCSS)
- **React Router** (`HashRouter` para GitHub Pages)
- **GSAP** + **ScrollTrigger** (animações)
- **i18n** simples via JSON (EN/PT)
- **Estrutura modular**: components, sections, pages, data

## 📁 Estrutura do Projeto

```
src/
  App.jsx
  main.jsx
  assets/
  components/      # Componentes reutilizáveis (Header, Loader, etc)
  data/            # Fontes de dados (projects, skills, contact)
  i18n/            # Traduções (en.json, pt.json)
  pages/           # Telas principais (Home, ProjectDetail)
  sections/        # Seções da Home (Intro, About, Projects, etc)
public/
  img/             # Imagens do portfólio
  font/            # Fontes customizadas
```

## 🗺️ Funcionalidades

- **Home**: Apresentação, sobre, projetos, skills, reconhecimentos e contato.
- **Detalhe do Projeto**: Página individual para cada projeto (`/projects/:slug`).
- **Animações**: Transições suaves e efeitos de scroll com GSAP.
- **Responsivo**: Layout adaptado para desktop e mobile.
- **Suporte a EN/PT**: Alternância de idioma no topo fixo.
- **Deploy fácil**: Pronto para GitHub Pages (`/Portfolio_LucasCecon/`).

## 🌐 Internacionalização

- Inglês (padrão) e Português.
- Dicionários simples em en.json e pt.json.
- Alternância de idioma no topo da página.

## 🧩 Organização dos Dados

- Projetos, skills e reconhecimentos são mantidos em arquivos JS/JSON em data.
- Fácil de adicionar/editar projetos e informações.

## 🖼️ Animações

- Utiliza GSAP e ScrollTrigger para animações de entrada, transições e efeitos de scroll.
- Hooks reutilizáveis e limpeza automática ao desmontar componentes.

## 📝 Customização

- Adicione novos projetos em projects.js.
- Edite textos e traduções em en.json e pt.json.
- Personalize estilos via Tailwind em tailwind.config.cjs.

## 📦 Scripts Disponíveis

- `npm run dev` — Inicia o servidor de desenvolvimento.
- `npm run build` — Gera build de produção.
- `npm run preview` — Visualiza build localmente.
