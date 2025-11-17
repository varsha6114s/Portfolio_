#!/bin/bash

echo "🚀 Deploying Developer Trading Cards Portfolio to GitHub Pages..."
echo ""

# Check if git remote exists
if ! git remote | grep -q "origin"; then
    echo "⚠️  No git remote found!"
    echo ""
    echo "Please run these commands first:"
    echo ""
    echo "git remote add origin https://github.com/varsha6114s/Portfolio_.git"
    echo "git branch -M main"
    echo "git push -u origin main"
    echo ""
    exit 1
fi

echo "✅ Git remote found"
echo ""

# Build and deploy
echo "📦 Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful"
    echo ""
    echo "🚀 Deploying to GitHub Pages..."
    npm run deploy
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "✅ Deployment successful!"
        echo ""
        echo "🌐 Your portfolio will be live at:"
        echo "   https://varsha6114s.github.io/Portfolio_/"
        echo ""
        echo "⏱️  It may take 1-2 minutes to go live."
        echo ""
    else
        echo ""
        echo "❌ Deployment failed!"
        echo "Check the error messages above."
    fi
else
    echo ""
    echo "❌ Build failed!"
    echo "Check the error messages above."
fi
