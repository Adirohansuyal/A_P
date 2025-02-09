#!/bin/bash

# Build the project
npm run build

# Create 404.html for client-side routing
cp dist/public/index.html dist/public/404.html

# Create .nojekyll file to bypass Jekyll processing
touch dist/public/.nojekyll

# Initialize git repo in the dist/public directory
cd dist/public

# Initialize new repo
git init
git add -A
git commit -m "Deploy to GitHub Pages"

# Force push to the gh-pages branch
git push -f git@github.com:Adirohansuyal/portfolio.git master:gh-pages

cd -
