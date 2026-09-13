# Marp Collaboration Template

Ein generisches, modulares Template für Marp-Präsentationen, das mehrere Markdown-Dateien für Teamarbeit, Projektvorstellungen oder Workshops kombiniert.

## Schnellstart

```bash
# Einmalig: Abhängigkeiten installieren
npm install

# Live-Vorschau starten
npm run watch
```

Danach kannst du die generierte Vorschau in `dist/` öffnen und direkt an den Folien im Ordner `slides/` arbeiten.

## Befehle

| Befehl | Beschreibung |
| :--- | :--- |
| `npm run watch` | Überwacht `main.md` und `slides/` auf Änderungen und baut die Präsentation automatisch neu. |
| `npm run bundle` | Fügt die einzelnen Folien in `dist/deck.md` zusammen. |
| `npm run build:pdf` | Erstellt die finale PDF-Datei unter `dist/deck.pdf`. |
| `npm run build:html` | Exportiert eine interaktive HTML-Version nach `dist/index.html`. |
| `npm run build:pptx` | Exportiert die Präsentation als PowerPoint-Datei nach `dist/deck.pptx`. |

## Workflow

1. `npm install` ausführen.
2. `npm run watch` starten.
3. In `slides/` neue Folien anlegen oder bestehende Inhalte bearbeiten.
4. `main.md` mit `!INCLUDE`-Einbindungen verwalten.
5. Die Ausgabe in `dist/` wird automatisch aktualisiert.

### Neue Folien einbinden

Erstelle eine neue Datei in `slides/` ohne Frontmatter und binde sie in `main.md` ein:

```markdown
!INCLUDE "slides/01-overview.md"

---

!INCLUDE "slides/02-details.md"
```

## Projektstruktur

```text
.
├── slides/              # Quellfolien als separate Markdown-Dateien
│   ├── 01-overview.md
│   └── 02-details.md
├── themes/              # Stylesheets für das Design
│   └── hfu.css
├── dist/                # Build-Artefakte (wird automatisch erzeugt)
├── bundle.js            # Bündelungs- und Render-Skript
├── main.md              # globales Frontmatter, Theme, Reihenfolge
├── package.json         # Skripte und Abhängigkeiten
├── README.md            # Projekt-Setup und Nutzung
└── .gitignore           # Standard-Dateien für Build-Ausgaben
```

## Beispiel für eine modulare Präsentation

`main.md` dient als Einstiegspunkt und bindet einzelne Folien ein. Dadurch lassen sich Inhalte sauber aufteilen, z. B. für:

- Projektvorstellung
- Team- und Rollenübersicht
- Architektur oder Prozessmodell
- Roadmap und Ergebnisse
- Abschluss und nächste Schritte

Das Template ist bewusst allgemein gehalten und kann für unterschiedliche Präsentationsziele verwendet werden.