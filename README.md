# COVID-19 Cases — Brazil

A mobile-first dashboard built with Ionic + React that shows real-time COVID-19 statistics for each Brazilian state.

## Stack

- [React 17](https://reactjs.org) + [TypeScript 4](https://www.typescriptlang.org/)
- [Ionic 6](https://ionicframework.com/) — mobile UI framework
- [Capacitor 2](https://capacitorjs.com/) — Android/iOS packaging
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
               ├── Header
               ├── StateSelector  ← calls setSelectedState
               └── Cards          ← filters once with useMemo
```

## Available scripts

| Command | Description |
|---|---|
| `pnpm start` | Start dev server |
| `pnpm build` | Production build |

## License

MIT — by Lucas Juan
