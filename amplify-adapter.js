// Simple adapter for AWS Amplify
const fs = require('fs');
const path = require('path');

// Create the deploy-manifest.json file that Amplify needs
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

// First make sure we have an output directory
const outputPath = path.join(__dirname, '.output');
const publicPath = path.join(outputPath, 'public');

// Make sure the amplify directory exists
const amplifyDir = path.join(outputPath, '.amplify-hosting');
if (!fs.existsSync(amplifyDir)) {
  fs.mkdirSync(amplifyDir, { recursive: true });
}

// Write the manifest file in the amplify directory
fs.writeFileSync(
  path.join(amplifyDir, 'deploy-manifest.json'),
  JSON.stringify(manifest, null, 2)
);

console.log('✅ Created deploy-manifest.json for Amplify in .output/.amplify-hosting');
