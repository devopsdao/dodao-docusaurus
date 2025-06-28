# GitHub Pages Setup Instructions

This repository includes a GitHub Actions workflow that automatically builds and deploys your Docusaurus documentation to GitHub Pages whenever you push to the main branch.

## Setup Steps

### 1. Enable GitHub Pages in Your Repository

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. Save the settings

### 2. Push Your Changes

Once you push this workflow file to your repository, the deployment will start automatically.

```bash
git add .
git commit -m "Add GitHub Pages deployment workflow"
git push origin main
```

### 3. Monitor the Deployment

1. Go to the **Actions** tab in your GitHub repository
2. You should see the "Deploy to GitHub Pages" workflow running
3. Once completed, your site will be available at: `https://[username].github.io/[repository-name]`

## Workflow Features

- **Automatic Deployment**: Triggers on every push to `main` or `master` branch
- **Manual Deployment**: Can be triggered manually from the Actions tab
- **Optimized Build**: Uses npm caching for faster builds
- **Modern GitHub Pages**: Uses the latest GitHub Pages deployment actions
- **Proper Permissions**: Configured with minimal required permissions

## Troubleshooting

### Common Issues

1. **Workflow not running**: Make sure GitHub Pages is set to "GitHub Actions" as the source
2. **Build failures**: Check the Actions tab for detailed error logs
3. **Site not updating**: Ensure you're pushing to the correct branch (`main` or `master`)

### Custom Domain

If you want to use a custom domain:

1. Add a `CNAME` file to the `static/` directory with your domain name
2. Configure your domain's DNS to point to GitHub Pages
3. Update your repository settings to use the custom domain

### Base URL Configuration

If your site is deployed to a subdirectory (like `username.github.io/repo-name`), make sure your `docusaurus.config.js` has the correct `baseUrl` setting:

```javascript
module.exports = {
  // ...
  url: 'https://username.github.io',
  baseUrl: '/repo-name/',
  // ...
};
```

## Workflow File Location

The workflow is located at `.github/workflows/deploy.yml` and will:

1. Check out your code
2. Set up Node.js 18
3. Install dependencies with `npm ci`
4. Build the site with `npm run build`
5. Deploy the `build/` directory to GitHub Pages

## Manual Deployment

You can also trigger deployment manually:

1. Go to the **Actions** tab
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow"
4. Choose the branch and click "Run workflow"
