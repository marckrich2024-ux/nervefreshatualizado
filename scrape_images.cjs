const https = require('https');
const fs = require('fs');
const path = require('path');

const ingredients = [
    { name: 'prickly-pear', url: 'https://en.wikipedia.org/wiki/Opuntia_ficus-indica' },
    { name: 'passionflower', url: 'https://en.wikipedia.org/wiki/Passiflora_incarnata' },
    { name: 'corydalis', url: 'https://en.wikipedia.org/wiki/Corydalis_yanhusuo' },
    { name: 'marshmallow-root', url: 'https://en.wikipedia.org/wiki/Althaea_officinalis' },
    { name: 'california-poppy', url: 'https://en.wikipedia.org/wiki/Eschscholzia_californica' }
];

const destDir = path.resolve('public', 'ingredients');
if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

function downloadFile(url, dest) {
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
        res.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log(`Downloaded: ${path.basename(dest)}`);
        });
    }).on('error', (err) => {
        console.error(`Error downloading ${url}:`, err.message);
    });
}

function fetchAndDownload(item) {
    https.get(item.url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
            // Find valid image URLs
            // Look for upload.wikimedia.org ... .jpg
            // Usually starts with //upload...
            const regex = /\/\/upload\.wikimedia\.org\/wikipedia\/commons\/[^"]+\.jpg/g;
            const matches = data.match(regex);

            if (matches && matches.length > 0) {
                // Filter out very small icons if possible, or just take the first "thumb" which is usually the box image
                // We prefer "thumb" which is sized, or the original.
                // Let's Find the first one that is NOT a sprite or icon?
                // Usually the infobox image is early.
                let imgUrl = matches.find(m => m.includes('thumb'));
                if (!imgUrl) imgUrl = matches[0]; // fallback

                const fullUrl = 'https:' + imgUrl;
                console.log(`Found image for ${item.name}: ${fullUrl}`);
                downloadFile(fullUrl, path.join(destDir, `${item.name}.jpg`));
            } else {
                console.error(`No image found for ${item.name}`);
                // Fallback for Corydalis if yanhusuo has no image (it might not)
                if (item.name === 'corydalis') {
                    console.log("Trying generic Corydalis page...");
                    // Manual fallback URI for Corydalis
                    downloadFile('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Corydalis_yanhusuo.JPG/220px-Corydalis_yanhusuo.JPG', path.join(destDir, 'corydalis.jpg'));
                }
            }
        });
    }).on('error', (err) => {
        console.error(`Error fetching ${item.url}:`, err.message);
    });
}

ingredients.forEach(fetchAndDownload);
