# Deployment Guide for La Casetta Website

This project is built with Vite, React, and Tailwind CSS. The following are the steps to deploy the production build.

## Prerequisites
- Node.js installed
- Production build generated (run `npm run build`)

## Option 1: GitHub Pages

### Manual Deployment
1. Build the project:
   ```bash
   npm run build
   ```
2. The production files will be in the `dist/` directory.
3. Push the `dist/` directory to a new branch (e.g., `gh-pages`) or use a tool like `gh-pages` package:
   ```bash
   npm install -D gh-pages
   ```
   Add these scripts to `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
   Then run:
   ```bash
   npm run deploy
   ```

### Automated (GitHub Actions)
Create a `.github/workflows/deploy.yml` file:
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Set up Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
      - name: Install and Build
        run: |
          npm install
          npm run build
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: dist
```

## Option 2: Netlify

1. Connect your GitHub repository to Netlify.
2. Configure the build settings:
   - **Build Command:** `npm run build`
   - **Publish directory:** `dist`
3. Netlify will automatically deploy your site whenever you push to the main branch.

## Serving Locally (Production Preview)
To test the production build locally:
```bash
npm run preview
```
This will serve the `dist` folder on http://localhost:4173.
