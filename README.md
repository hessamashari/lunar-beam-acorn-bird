# Lunar Beam Acorn Bird

A modern React + TypeScript web application built with **TanStack Start**, **Vite**, and **PostgreSQL** (with embedded **PGLite** fallback for local development).

## Features

- ⚡ **Fast Development** — Powered by Vite with HMR (Hot Module Replacement)
- 🎨 **Beautiful UI** — Tailwind CSS + Radix UI components
- 🔐 **Authentication** — Better Auth integration for secure user management
- 🗄️ **Dual Database Support**:
  - **Neon** (PostgreSQL) for production
  - **PGLite** (embedded Postgres in WASM) for local preview
- 📦 **Type-Safe** — Full TypeScript support with strict mode
- 🧪 **Testable** — Node.js native test runner with TypeScript support
- 📋 **Well-Configured** — ESLint, Prettier, and automated CI/CD

## Quick Start

### Prerequisites

- Node.js 20+ (recommended)
- npm (or your preferred package manager)

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/hessamashari/lunar-beam-acorn-bird.git
   cd lunar-beam-acorn-bird
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment** (optional)
   ```bash
   cp .env.example .env.local
   # Edit .env.local to add DATABASE_URL for production Neon setup
   # Leave empty to use embedded PGLite in preview
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```
   The app runs at `http://localhost:8080`

## Available Scripts

- **`npm run dev`** — Start development server (port 8080)
- **`npm run build`** — Build for production
- **`npm run preview`** — Preview production build locally (port 8081)
- **`npm run typecheck`** — Run TypeScript type checking
- **`npm run lint`** — Run ESLint
- **`npm run format`** — Format code with Prettier
- **`npm run test`** — Run all tests

## Database Configuration

The app automatically detects which database to use:

### Local Development (Default)
- **PGLite** (embedded Postgres in WASM)
- In-memory database that resets on server restart
- Perfect for testing and preview

### Production / Custom Setup
- Set `DATABASE_URL` environment variable
- Uses Neon (serverless PostgreSQL)
- Example: `postgresql://user:password@host:port/database`

See [`.env.example`](.env.example) for all configuration options.

## Project Structure

```
.
├── src/                 # React components, pages, and client code
├── server/              # Server-side code (if using TanStack Start SSR)
├── scripts/             # Utility scripts and migrations
├── migrations/          # SQL migration files
├── public/              # Static assets
├── dist/                # Build output (generated)
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite build configuration
├── eslint.config.mjs    # ESLint rules
└── .prettierrc           # Prettier formatting rules
```

## Authentication

The project uses **Better Auth** for user authentication. Configure OAuth providers or email/password auth in the auth setup. See `src/lib/auth/` for implementation details.

## Testing

Run tests with:
```bash
npm test
```

Tests include:
- Unit tests in `scripts/**/*.test.mjs`
- Integration tests in `src/lib/**/*.test.ts`

## Code Quality

All code is automatically linted and formatted:

- **ESLint** — Catches logic errors and best practices
- **Prettier** — Enforces consistent formatting
- **TypeScript** — Strict type checking enabled
- **GitHub Actions** — CI/CD pipeline validates quality on every push/PR

## Deployment

### Vercel (Recommended)
```bash
vercel deploy
```
Set `DATABASE_URL` environment variable in Vercel dashboard for production Neon setup.

### Docker / Other Platforms
The app can be containerized. See `startup.sh` for startup instructions.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m "Add amazing feature"`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source. See LICENSE file for details.

## Support

For issues or questions:
- Open a GitHub issue
- Check existing discussions
- Review the documentation in this README

---

Built with ❤️ by [Hessam Ashari](https://github.com/hessamashari)
