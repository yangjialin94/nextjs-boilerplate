# About

A highly optimized Next.js boilerplate with TypeScript, Tailwind CSS, ESLint, Prettier, and Husky preconfigured for rapid development.

## Folder Structure

```txt
nextjs-boilerplate/
│-- public               # Static assets (favicons, images)
│-- src/                 # Root folder
    │-- app/             # Pages
        │-- layout.tsx   # Root layout
        │-- page.tsx     # Home page
    │-- components/      # Components
    │-- hooks/           # Custom React hooks
    │-- styles/          # Global styles
    │-- utils/           # Utility functions
│-- .gitignore           # Git ignore configuration
│-- .prettierignore      # Prettier ignore configuration
│-- .prettierrc          # Prettier configuration
│-- .eslint.config.mjs   # ESLint configuration
│-- next.config.js       # Next.js configuration
│-- package.json         # Project metadata & dependencies
```

## Quick Start

```sh
git clone https://github.com/yangjialin94/nextjs-boilerplate
cd nextjs-boilerplate
npm install && npm run dev
```

## Lint & Format

```sh
npm run lint && npm run format
```

## Build and Run

```sh
npm run build && npm run start
```
