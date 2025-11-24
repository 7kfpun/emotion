#!/usr/bin/env sh

# abort on errors
set -e

# build
echo "Building the app..."
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

echo "Initializing git repository..."
git init
git checkout -b main
git add -A
git commit -m 'Deploy to GitHub Pages'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
echo "Deploying to GitHub Pages..."
git push -f git@github.com:7kfpun/emotion.git main:gh-pages

cd -
echo "Deployment complete!"
