# CP Games

A static classroom game hub for CP students. The main homepage links to English games and other classroom projects. The **Under the Sea** project preserves both existing games:

- **Memory Game:** match eight underwater picture and word pairs.
- **What Disappeared?:** study the pictures and identify the missing one.

The English section is intentionally empty for now, ready for future classroom games.

## Run locally

```bash
python3 -m http.server 8000
```

Visit `http://localhost:8000`. There is no build step, and all navigation uses deployment-safe relative links for static hosting on Netlify.
