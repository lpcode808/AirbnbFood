// Download sample images for the project
const https = require('https');
const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '../public/images');

// Make sure the directory exists
if (!fs.existsSync(IMAGES_DIR)) {
  fs.mkdirSync(IMAGES_DIR, { recursive: true });
}

// Hawaii food-related keywords for the placeholder images
const keywords = [
  'shrimp-plate',
  'hawaiian-food',
  'poke-bowl',
  'plate-lunch',
  'shave-ice',
  'japanese-food',
  'seafood',
  'hawaiian-hotdog',
  'tropical-food',
  'hawaii-restaurant',
  'food-truck',
  'island-cuisine',
  'pacific-food',
  'tropical-fruit',
  'luau-food',
  'polynesian-cuisine'
];

// Download an image from a URL and save it to the file system
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(IMAGES_DIR, filename);
    
    const file = fs.createWriteStream(filePath);
    https.get(url, (response) => {
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`✅ Downloaded: ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {});
      console.error(`❌ Error downloading ${filename}: ${err.message}`);
      reject(err);
    });
  });
}

// Main download function
async function downloadSampleImages() {
  console.log('🍽️ Downloading sample food images...');
  
  // Download 16 images (2 for each food spot)
  for (let i = 1; i <= 16; i++) {
    const keyword = keywords[(i - 1) % keywords.length];
    const filename = `food${i}.jpg`;
    // Using placeholder service for food images
    const imageUrl = `https://source.unsplash.com/featured/?${keyword}&${i}`;
    
    try {
      await downloadImage(imageUrl, filename);
    } catch (error) {
      console.error(`Failed to download image ${i}`);
    }
  }
  
  console.log('✨ Done downloading images!');
}

downloadSampleImages(); 