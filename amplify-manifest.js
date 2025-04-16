const fs = require('fs');
const path = require('path');

// This will be executed after the build
const manifestPath = path.join(__dirname, '.output', 'deploy-manifest.json');
const publicPath = path.join(__dirname, '.output', 'public');

// Create a simple manifest for Amplify
const manifest = {
  version: 1,
  routes: [
    {
      path: '/*',
      target: '/index.html',
      status: '200',
      conditions: {
        ResourcePath: '/index.html'
      }
    }
  ]
};

// Create .amplify-hosting directory if it doesn't exist
const amplifyHostingDir = path.join(__dirname, '.output', '.amplify-hosting');
if (!fs.existsSync(amplifyHostingDir)) {
  fs.mkdirSync(amplifyHostingDir, { recursive: true });
}

// Write the manifest file in both locations for maximum compatibility
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
fs.writeFileSync(path.join(amplifyHostingDir, 'deploy-manifest.json'), JSON.stringify(manifest, null, 2));

console.log('✅ Created deploy-manifest.json for Amplify');
