# GitTogether Delhi Dashboard - Deployment Guide

This guide will help you deploy the GitTogether Delhi Dashboard to GitHub Pages.

## 🚀 Quick Deployment Steps

### 1. Prerequisites
- GitHub account
- Git installed locally
- Node.js 18+ installed

### 2. Repository Setup

If you haven't already, push your code to GitHub:

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit the changes
git commit -m "Initial commit - GitTogether Delhi Dashboard"

# Add your GitHub repository as origin
git remote add origin https://github.com/YOUR_USERNAME/gittogether-dashboard.git

# Push to GitHub
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. The deployment workflow will automatically trigger

### 4. Configuration Details

The following files have been configured for GitHub Pages deployment:

#### `.github/workflows/deploy.yml`
- Automated deployment workflow
- Builds the Next.js app and deploys to GitHub Pages
- Triggers on push to `main` branch

#### `next.config.ts`
- Configured for static export (`output: 'export'`)
- Set base path for GitHub Pages subdirectory
- Disabled image optimization for static hosting
- Enabled trailing slashes for proper routing

#### `package.json`
- Added deployment scripts
- Build optimized for static export

## 🌐 Access Your Deployed Site

After successful deployment, your site will be available at:
```
https://YOUR_USERNAME.github.io/gittogether-dashboard/
```

## 🔧 Local Testing

Test the production build locally before deploying:

```bash
# Build for production
npm run build

# Test the static export
npx serve out
```

## 📝 Customization

### Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public` directory with your domain
2. Configure DNS settings with your domain provider
3. Update the `basePath` in `next.config.ts` to an empty string

### Base Path Configuration

If deploying to a different repository name, update the `basePath` in `next.config.ts`:

```typescript
basePath: process.env.NODE_ENV === 'production' ? '/YOUR_REPO_NAME' : '',
assetPrefix: process.env.NODE_ENV === 'production' ? '/YOUR_REPO_NAME/' : '',
```

## 🚨 Troubleshooting

### Common Issues:

1. **404 on page refresh**: Ensure `trailingSlash: true` is set in next.config.ts
2. **Images not loading**: Check that `unoptimized: true` is set for images
3. **CSS/JS not loading**: Verify the `assetPrefix` configuration
4. **Routing issues**: Make sure all internal links use relative paths

### Build Errors:

If the build fails, check:
- All dependencies are properly installed
- No TypeScript errors in the code
- All imported components exist and are properly exported

## 📊 Performance Optimization

The deployment is optimized for:
- Static file serving
- Fast loading times
- SEO-friendly URLs
- Mobile responsiveness

## 🔄 Updating the Site

To update your deployed site:

1. Make changes to your code
2. Commit and push to the `main` branch
3. GitHub Actions will automatically rebuild and deploy

```bash
git add .
git commit -m "Update dashboard content"
git push origin main
```

## 🎯 Next Steps

After deployment:
1. Test all pages and functionality
2. Verify presentation mode works correctly
3. Check mobile responsiveness
4. Share your live dashboard URL with the GitTogether Delhi community!

## 📞 Support

If you encounter issues:
1. Check the GitHub Actions tab for build logs
2. Verify all configuration files are correct
3. Test locally first with `npm run build`

---

**Live URL**: `https://YOUR_USERNAME.github.io/gittogether-dashboard/`

Happy deploying! 🚀
