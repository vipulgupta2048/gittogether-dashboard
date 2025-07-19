#!/bin/bash

# GitTogether Delhi Dashboard - Quick Deploy Script
# This script helps set up the repository for GitHub Pages deployment

echo "🚀 GitTogether Delhi Dashboard - GitHub Pages Setup"
echo "=================================================="

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "❌ Error: Not in a git repository. Please run 'git init' first."
    exit 1
fi

# Check if package.json exists
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

echo "✅ Checking dependencies..."
npm install

echo "✅ Testing production build..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed. Please fix the errors before deploying."
    exit 1
fi

echo ""
echo "🎉 Setup complete! Your dashboard is ready for GitHub Pages deployment."
echo ""
echo "Next steps:"
echo "1. Commit your changes: git add . && git commit -m 'Setup GitHub Pages deployment'"
echo "2. Push to GitHub: git push origin main"
echo "3. Go to your repository Settings → Pages"
echo "4. Select 'GitHub Actions' as the source"
echo "5. Your site will be available at: https://USERNAME.github.io/gittogether-dashboard/"
echo ""
echo "For detailed instructions, see DEPLOYMENT.md"
