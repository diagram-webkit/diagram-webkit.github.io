# diagram-webkit.github.io

https://diagram-webkit.github.io: the [diagram-webkit](https://github.com/diagram-webkit/diagram-webkit) standalone app with ready-made tags. Open any draw.io SVG (file, drop, link or `#svg=`); nothing is uploaded.

Ready-made tags (`config/tags.js`, `content/css.js`, listed in the app's About):

| Tag | Meaning |
| --- | --- |
| `pri-1` … `pri-5` | Critical, High, Medium, Low, Minor |
| `info` | Info |
| `level-N` | shown from detail level N |
| `A`, `A.B` | topics, nested with `.` |
| `css-dashed`, `css-thick`, `css-faded`, `css-muted`, `css-glow` | styles |

```sh
npm install
npm run dev
npm run build      # dist/index.html, a single file
```

Against a local diagram-webkit checkout: `export DIAGRAM_WEBKIT_DIR=../repo`.

Deploys to GitHub Pages on push to `main` (`.github/workflows/deploy.yml`; Settings -> Pages -> Source: GitHub Actions).
