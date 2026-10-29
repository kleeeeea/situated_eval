# Situated Evaluation — EMNLP 2026 Paper Website

A responsive, zero-build-dependency academic project website for:

**Beyond Task-Based Evaluation: Toward Situated Benchmarks for Educational LLMs**  
Findings of ACL: EMNLP 2026, pp. 32011–32023.  
https://aclanthology.org/2026.findings-emnlp.1503/

## Preview locally

Open `index.html` in a browser, or run:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Deploy on GitHub Pages

1. Create a new public GitHub repository, e.g. `situated-eval`.
2. Upload the **contents** of this folder (`index.html`, `styles.css`, `script.js`, `assets/`, etc.) to the repository root; commit to `main`.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, branch **main**, folder **/(root)**, then **Save**.
5. The website will be available at `https://YOUR-USERNAME.github.io/situated-eval/` once GitHub completes deployment.

No Node.js, npm, or build configuration is needed. All paths are relative, so GitHub Pages project subpaths work.

## Customize

- Modify paper text, authors, and links in `index.html`.
- Change colors, typography, and responsive layout in `styles.css`.
- Edit the three-layer interactive cards and citation-copy logic in `script.js`.
- Replace `assets/favicon.svg` with your project's icon.

## Notes

This page describes a **position paper and proposed research roadmap**, not a released benchmark or validated experimental results. Paper details and framework were checked against the ACL Anthology PDF (2026.findings-emnlp.1503).

The project uses Google Fonts over a CDN; browsers fall back to system fonts when offline.
