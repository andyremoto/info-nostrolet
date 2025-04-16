const fs = require('fs');
const path = require('path');

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

// Write the manifest file in EVERY possible location Amplify might look
const possibleLocations = [
  // Root of the project
  './',
  // Output directory
  './.output/',
  // Public directory
  './.output/public/',
  // Amplify hosting directory in output
  './.output/.amplify-hosting/',
  // Amplify hosting directory in public
  './.output/public/.amplify-hosting/'
];

// Create all directories and write manifest files
possibleLocations.forEach(location => {
  const dirPath = path.join(__dirname, location);
  const amplifyDir = path.join(dirPath, '.amplify-hosting');
  
  // Create directory if it doesn't exist
  try {
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
      console.log(`Created directory: ${dirPath}`);
    }
    
    // Create .amplify-hosting subdirectory
    if (!fs.existsSync(amplifyDir)) {
      fs.mkdirSync(amplifyDir, { recursive: true });
      console.log(`Created directory: ${amplifyDir}`);
    }
    
    // Write manifest file in the main directory
    fs.writeFileSync(path.join(dirPath, 'deploy-manifest.json'), JSON.stringify(manifest, null, 2));
    console.log(`Created manifest in: ${dirPath}`);
    
    // Write manifest file in the .amplify-hosting subdirectory
    fs.writeFileSync(path.join(amplifyDir, 'deploy-manifest.json'), JSON.stringify(manifest, null, 2));
    console.log(`Created manifest in: ${amplifyDir}`);
  } catch (error) {
    console.error(`Error creating manifest in ${location}:`, error);
  }
});

console.log('✅ Created deploy-manifest.json in all possible locations for Amplify');
