# bhvr 🦫

![cover](https://cdn.stevedylan.dev/ipfs/bafybeievx27ar5qfqyqyud7kemnb5n2p4rzt2matogi6qttwkpxonqhra4)

A full-stack TypeScript monorepo starter with shared types, using Bun, Hono, Vite, and React

## Why bhvr?

While there are plenty of existing app building stacks out there, many of them are either bloated, outdated, or have too much of a vendor lock-in. bhvr is built with the opinion that you should be able to deploy your client or server in any enviorment while also keeping type saftey.

## Features

- **Full-Stack TypeScript**: End-to-end type safety between client and server
- **Shared Types**: Common type definitions shared between client and server
- **Monorepo Structure**: Organized as a workspaces-based monorepo
- **Modern Stack**:
  - [Bun](https://bun.sh) as the JavaScript runtime
  - [Hono](https://hono.dev) as the backend framework
  - [Vite](https://vitejs.dev) for frontend bundling
  - [React](https://react.dev) for the frontend UI

## Project Structure

```
.
├── client/               # React frontend
├── server/               # Hono backend
├── shared/               # Shared TypeScript definitions
│   └── src/types/        # Type definitions used by both client and server
└── package.json          # Root package.json with workspaces
```

## Getting Started

### Quick Start

You can start a new bhvr project using the [CLI](https://github.com/stevedylandev/create-bhvr)

```bash
bun create bhvr
```

### Installation

```bash
# Install dependencies for all workspaces
bun install
```

### Development

```bash
# Run shared types in watch mode, server, and client all at once
bun run dev

# Or run individual parts
bun run dev:shared  # Watch and compile shared types
bun run dev:server  # Run the Hono backend
bun run dev:client  # Run the Vite dev server for React
```

### Building

```bash
# Build everything
bun run build

# Or build individual parts
bun run build:shared  # Build the shared types package
bun run build:client  # Build the React frontend
```

### Deployment

Deplying each piece is very versatile and can be done numerous ways, and exploration into automating these will happen at a later date. Here are some references in the meantime.

**Client**
- [Orbiter](https://orbiter.host)
- [GitHub Pages](https://vite.dev/guide/static-deploy.html#github-pages)
- [Netlify](https://vite.dev/guide/static-deploy.html#netlify)
- [Cloudflare Pages](https://vite.dev/guide/static-deploy.html#cloudflare-pages)

**Server**
- [Cloudflare Worker](https://gist.github.com/stevedylandev/4aa1fc569bcba46b7169193c0498d0b3)
- [Bun](https://hono.dev/docs/getting-started/bun)
- [Node.js](https://hono.dev/docs/getting-started/nodejs)

## Type Sharing

Types are automatically shared between the client and server thanks to the shared package and TypeScript path aliases. You can import them in your code using:

```typescript
import { ApiResponse } from '@shared/types';
```

## Learn More

- [Bun Documentation](https://bun.sh/docs)
- [Vite Documentation](https://vitejs.dev/guide/)
- [React Documentation](https://react.dev/learn)
- [Hono Documentation](https://hono.dev/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
