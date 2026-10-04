<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# hmgundu.dev agent notes

## Toolchain (do not substitute)

- Package manager is **pnpm** (`packageManager` field pins the version).
  Never npm/yarn. Lockfile is `pnpm-lock.yaml`.
- Lint with **oxlint** (`pnpm lint`), format with **oxfmt**
  (`pnpm fmt` / `pnpm fmt:check`). ESLint and Prettier are gone.
- Typecheck with `pnpm exec tsc --noEmit`. TypeScript 7 with a
  modernized `tsconfig.json`.

## Turbopack constraints (both `next dev` and `next build` use it)

- `next.config.mjs` `rehypePlugins`/`remarkPlugins` must be package
  NAME strings (or `[name, plain-JSON-options]` tuples). @next/mdx
  resolves them at compile time; imported function references fail
  with "does not have serializable options".
- Custom CSS in `app/globals.css` stays at the top level, outside
  `@layer` blocks.

## Verification

- The author runs `next dev` on port 3000. Never start a second dev
  server on the project dir (lockfile refuses); use `next start` on
  another port against a production build for isolated checks, and
  kill only servers you started (by exact PID, never broad pkill).
- Browser-verify with Playwright: hover/keyboard states, computed
  styles, screenshots. The `next-dev-loop` skill in `.agents/skills`
  documents the edit-and-verify loop (`/_next/mcp` + browser).
