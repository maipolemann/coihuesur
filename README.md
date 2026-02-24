# Coihue Sur Site

Sitio institucional de Coihue Sur, implementado como landing estática en Astro y publicado en GitHub Pages.

## Estado actual
- Stack actual: Astro (`output: static`).
- Deploy: GitHub Actions -> GitHub Pages (Project Pages).
- URL base esperada: `/coihuesur`.
- Objetivo del diseño: estética editorial-andina corporativa, con foco en gestión sustentable y participativa.

## Arquitectura
- Página principal: `src/pages/index.astro`
- Layout base: `src/layouts/BaseLayout.astro`
- Datos de contenido tipado: `src/data/site.ts`
- Sistema visual global: `src/styles/global.css`
- Configuración Astro: `astro.config.mjs`
- Workflow deploy: `.github/workflows/hugo-gh-pages.yml` (nombre histórico, pipeline actual Astro)

## Secciones implementadas
1. Hero institucional con CTA primario.
2. Propuesta de valor.
3. Core técnico Coihue Sur (diagrama tipo árbol/sankey).
4. Servicios + metodología.
5. Equipo directivo.
6. Contacto con formulario mockup.

## Decisiones de diseño relevantes
- Identidad visual inspirada en paisaje andino y coihue (verdes profundos + tonos orgánicos).
- Tipografías:
  - Display: `Fraunces`
  - Texto: `Source Sans 3`
- Navegación sticky y jerarquía editorial para lectura rápida.
- Sección “Core técnico” rediseñada como flujo visual (nodo central + ramas + columnas).

## Desarrollo local
Requisitos:
- Node.js 22+
- npm 10+

Instalación:
```bash
npm install
```

Dev server:
```bash
npm run dev
```

Build:
```bash
npm run build
```

Preview:
```bash
npm run preview
```

## Deploy (GitHub Pages)
El deploy se dispara con push a `main`.

Pipeline:
1. `actions/checkout`
2. `actions/setup-node`
3. `npm ci`
4. `npm run build`
5. Upload de `dist/`
6. `actions/deploy-pages`

## QA funcional y visual
Se incorporó flow de smoke test del proyecto:
- `qa/flows/coihuesur-smoke.json`

Cobertura del flow:
- Render principal.
- Navegación por anclas (`#core`, `#contacto`).
- Aserciones de contenido crítico (incluido core-tree).
- Interacción básica de formulario.
- Captura de evidencia.

Artefactos QA:
- Generados en `qa/artifacts/` (ignorado en git).

## Comandos QA recomendados
Definir base de skills (si no existe):
```bash
# Bash
export CODEX_HOME="${CODEX_HOME:-$HOME/.codex}"
```

```powershell
# PowerShell
if (-not $env:CODEX_HOME) { $env:CODEX_HOME = "$HOME\\.codex" }
```

Ejemplo de ejecución del flow (usando skills/scripts globales):
```bash
uv run --with selenium python "$CODEX_HOME/skills/frontend-selenium-workflows/scripts/run_flow.py" --flow qa/flows/coihuesur-smoke.json --out-dir qa/artifacts/flows
```

Screenshots por viewport:
```bash
uv run --with selenium python "$CODEX_HOME/skills/frontend-visual-qa/scripts/selenium_screenshot.py" --url http://127.0.0.1:4321/coihuesur/ --out qa/artifacts/screens/home-desktop.png --width 1440 --height 900 --wait-selector "main"
```

Diff visual:
```bash
uv run --with pillow python "$CODEX_HOME/skills/frontend-visual-qa/scripts/image_diff.py" --baseline qa/artifacts/screens/baseline.png --current qa/artifacts/screens/home-desktop.png --diff-out qa/artifacts/reports/diff.png --report-out qa/artifacts/reports/report.json --threshold 3.0
```

## Notas de entorno (Windows)
- Para evitar bloqueos de Astro telemetry:
  - `ASTRO_TELEMETRY_DISABLED=1`
- Para evitar errores de cache/locks de `uv`:
  - `UV_CACHE_DIR=%LOCALAPPDATA%\Temp\uv-cache-srt`

## Legacy
El repositorio conserva estructura histórica de Hugo (`content/`, `themes/`, etc.), pero el runtime activo del sitio es Astro.
