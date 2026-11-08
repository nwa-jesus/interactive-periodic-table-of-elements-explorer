# Element Atlas

**Interactive periodic table of elements explorer**

Created by **SMAUEL CHUKWUEBUKA NWAJESUS**  
Matric number: **2025/HND/SWD/101**

Element Atlas is a responsive, interactive periodic table featuring all 118 elements. Search by element name, symbol, or atomic number; filter by category; select any element to view its atomic details; or choose “Surprise me” for a random element.

## Run locally

Open `index.html` in a modern web browser. No installation or build step is required. An internet connection loads the optional web fonts; the explorer itself works offline.

## Publish with GitHub Pages

1. Create a **public** GitHub repository named `element-atlas` and upload the project files.
2. In the repository, open **Settings → Pages** and set the source to **GitHub Actions** if it is not already selected.
3. Push the files to the `main` branch. The included workflow deploys the site; its URL appears under **Settings → Pages** and in the workflow run.

The deployed site is static and requires no server-side configuration.

## Project files

- `index.html` — accessible page structure and controls
- `styles.css` — responsive layout and element-category styling
- `app.js` — element data, table rendering, search, filters, and selection
- `.github/workflows/pages.yml` — automated GitHub Pages deployment