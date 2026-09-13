# Marp Collaboration Template

Ein modulares Template für Marp-Präsentationen für kollaboratives Arbeiten im Team über getrennte Markdown-Dateien.

## Schnellstart

```bash
# Einmalig: Abhängigkeiten installieren
npm install

# Live-Vorschau starten (überwacht Änderungen & baut automatisch)
npm run watch
```

Anschließend die Datei `dist/deck.pdf` mit der VS Code PDF-Vorschau öffnen und direkt in den Dateien unter `slides/` arbeiten.

## Befehle

| Befehl | Beschreibung |
| :--- | :--- |
| `npm run watch` | Überwacht `main.md` und `slides/` auf Änderungen. Führt bei jedem Speichern automatisch das Bündeln und Neurendern der PDF aus. |
| `npm run bundle` | Führt die Quellfolien manuell in `dist/deck.md` zusammen (nützlich für CI/CD oder Debugging). Im Alltag reicht `npm run watch`, da der Watcher das Bündeln automatisch miterledigt. |
| `npm run build:pdf` | Baut manuell die finale PDF-Datei unter `dist/deck.pdf`. |
| `npm run build:html` | Exportiert eine interaktive HTML-Präsentation unter `dist/index.html`. |
| `npm run build:pptx` | Exportiert die Präsentation als PowerPoint-Datei unter `dist/deck.pptx`. |

## Workflow

1. Starte `npm run watch` im Terminal.
2. Öffne die generierte `dist/deck.pdf` parallel im Editor.
3. Bearbeite oder erstelle deine Abschnitte im Ordner `slides/`.
4. Sobald du speicherst, aktualisiert der Watcher die Folien im Hintergrund.

### Neue Folien einbinden

Erstelle eine neue Markdown-Datei in `slides/` (z. B. `slides/02-architecture.md`) ohne Frontmatter und binde sie in der `main.md` ein:

```markdown
!INCLUDE "slides/01-intro.md"

---

!INCLUDE "slides/02-architecture.md"
```

## Projektstruktur

```text
.
├── .vscode/             # VS Code Konfiguration & Extensions
├── slides/              # Quellfolien (getrennte Markdown-Dateien)
│   └── 01-intro.md
├── dist/                # Build-Artefakte (deck.md, deck.pdf; ignoriert)
├── bundle.js            # Node-Skript zum Zusammenfügen der Folien & PDF-Build
├── main.md              # Header, Themes, Layout & Folienreihenfolge
├── package.json         # Build- & Watch-Skripte
└── README.md
```