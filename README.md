# Saskia Leismann — Portfolio

Persönliche Portfolio-Webseite für Grafikdesign, Einladungen und kleine Filme. Die Seite ist als statische Website gebaut und kommt ohne Build-Schritt aus.

## Lokal ansehen

Im Projektordner einen lokalen Webserver starten, zum Beispiel mit `python -m http.server 8000`, dann `http://localhost:8000` im Browser öffnen.

## Inhalte anpassen

- Texte und Projektkarten: `index.html`
- Farben, Typografie und Layout: `styles.css`
- Bilder, Videodateien und Video-Vorschaubilder: `assets/`
- Kontaktmöglichkeit: im Kontaktbereich von `index.html` ergänzen

## GitHub Pages

Der Workflow unter `.github/workflows/pages.yml` veröffentlicht die Seite nach Pushes auf `main`. Die Pages-Veröffentlichung ist bereits für GitHub Actions eingerichtet.

Nach erfolgreichem Deployment ist die Seite unter <https://saskiaportfolio.github.io/Portfolio/> erreichbar. Der Status des Deployments steht im Tab **Actions**.
