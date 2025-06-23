#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📦 Built files are in the 'dist' directory"
    echo "🚀 You can now deploy to GitHub Pages by pushing to main branch"
    echo "   or run 'npm run deploy' for manual deployment"
else
    echo "❌ Build failed!"
    exit 1
fi
