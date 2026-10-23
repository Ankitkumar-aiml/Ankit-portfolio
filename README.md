# Ankit Kumar — Portfolio

A responsive student portfolio built with React, Vite, CSS, and Lucide icons.

## Run locally

1. Install Node.js (LTS) from https://nodejs.org/
2. Extract this project folder.
3. Open the folder in VS Code.
4. Open Terminal and run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL Vite prints (usually `http://localhost:5173`).

## Customize before publishing

Open `src/main.jsx` and update the `profile` object:
- `email`
- `github`
- `linkedin`
- `leetcode`
- `resume`

Replace the example project links with the actual repository/demo URLs. Update the education details and verify that every listed skill reflects your experience.

To enable the resume download, put your PDF at `public/resume.pdf` (create the `public` folder if needed). The button links to `/resume.pdf`.

## Build for deployment

```bash
npm run build
npm run preview
```

The production site is generated in the `dist` folder and can be deployed to Vercel, Netlify, or GitHub Pages (with suitable Vite base-path configuration).
