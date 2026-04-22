# COVID-19 Cases — Brazil

A mobile-first dashboard built with Ionic + React that shows real-time COVID-19 statistics for each Brazilian state.

## Stack

- [React 18](https://reactjs.org) + [TypeScript 4](https://www.typescriptlang.org/)
- [Ionic 8](https://ionicframework.com/) — mobile UI framework
- [Capacitor 7](https://capacitorjs.com/) — Android/iOS packaging
- [React Router 6](https://reactrouter.com/) — routing
- [Axios 1](https://axios-http.com/) — HTTP client
- [Covid19 Brasil API](https://github.com/devarthurribeiro/covid19-brazil-api) — data source

## Getting started

```bash
pnpm install
pnpm start
```

## Architecture

State management uses a single React Context (`CovidProvider` in `src/contexts/data.tsx`). All data fetching happens there on mount; components consume it via the `useCovid()` hook.

```
App → Routes (CovidProvider wraps everything)
         └── Home
               ├── Header           ← decorative image with gradient overlay
               ├── StateSelector    ← compact button → searchable modal (IonSearchbar)
               └── Cards            ← 2×2 stat grid, single useMemo find
```

## Scripts

| Command | Description |
|---|---|
| `pnpm start` | Start dev server |
| `pnpm build` | Production build |
| `pnpm android:init` | Generate the `android/` platform folder (run once) |
| `pnpm android:sync` | Rebuild web and sync to Android |
| `pnpm android:open` | Open project in Android Studio |

## License

MIT — by Lucas Juan
