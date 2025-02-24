// Download sample images for the project
const fs = require('fs');
const path = require('path');
const https = require('https');

// Create the images directory if it doesn't exist
const imagesDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Sample food image URLs from Unsplash
const imageUrls = [
  'https://images.unsplash.com/photo-1558538337-aab544368de8?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1559847844-5315695dadae?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1562967914-608f82629710?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1573626447226-8731efabeb91?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1562967915-1e4a15a69343?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1548614606-52b4451f994b?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1540683547110-d991c4caaf4d?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1592123133368-8b5800abf7f0?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1530219572517-1f7f5096b8b8?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1615361200141-f45961202b5e?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1563252722-6292466e089e?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1607301405390-d831c242f59c?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1621188288739-da48118157a2?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1622040806062-27ae4fcd461a?w=800&auto=format&fit=crop',
];

// Download function
const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    console.log(`Downloading ${filename}...`);
    
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }
      
      const fileStream = fs.createWriteStream(path.join(imagesDir, filename));
      response.pipe(fileStream);
      
      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Downloaded ${filename} successfully`);
        resolve();
      });
      
      fileStream.on('error', (err) => {
        fs.unlink(path.join(imagesDir, filename), () => {});
        reject(err);
      });
      
    }).on('error', (err) => {
      reject(err);
    });
  });
};

// Download all images
async function downloadAllImages() {
  try {
    const downloadPromises = imageUrls.map((url, index) => {
      const filename = `food${index + 1}.jpg`;
      return downloadImage(url, filename);
    });
    
    await Promise.all(downloadPromises);
    console.log('All images downloaded successfully');
  } catch (error) {
    console.error('Error downloading images:', error);
    process.exit(1);
  }
}

downloadAllImages(); 