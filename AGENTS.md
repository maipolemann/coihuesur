# AGENTS.md

## Seguridad de rutas
- No hardcodear rutas locales absolutas del entorno del desarrollador (por ejemplo `C:\Users\...`, `/home/...`, `/Users/...`) en código, scripts, config, documentación o comandos.
- Cuando una ruta absoluta sea necesaria, parametrizarla con variables de entorno (por ejemplo `CODEX_HOME`, `PROJECT_ROOT`, `UV_CACHE_DIR`) y documentar un valor por defecto seguro.
- Preferir rutas relativas al repositorio para artefactos del proyecto (por ejemplo `qa/artifacts/...`), evitando exponer el filesystem general.
- Antes de cerrar cambios, verificar que no queden rutas locales explícitas en el estado final ni en commits nuevos.

