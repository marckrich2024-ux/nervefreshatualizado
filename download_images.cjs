const fs = require('fs');
const https = require('https');
const path = require('path');

const images = [
    { url: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Opuntia_ficus-indica_fruit.jpg", name: "prickly-pear.jpg" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Passiflora_incarnata_flower.jpg", name: "passionflower.jpg" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Corydalis_yanhusuo.JPG", name: "corydalis.jpg" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Althaea_officinalis_001.JPG", name: "marshmallow-root.jpg" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Eschscholzia_californica_2.jpg", name: "california-poppy.jpg" }
];

const destDir = path.resolve('public', 'ingredients');

console.log(`Downloading images to ${destDir}...`);

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

images.forEach(img => {
    const filePath = path.join(destDir, img.name);
    const file = fs.createWriteStream(filePath);

    const request = https.get(img.url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, function (response) {
        if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
            console.log(`Redirecting for ${img.name}...`);
            https.get(response.headers.location, { headers: { 'User-Agent': 'Mozilla/5.0' } }, function (redirectResponse) {
                redirectResponse.pipe(file);
                file.on('finish', () => {
                    file.close();
                    console.log(`Downloaded ${img.name}`);
                });
            });
        } else {
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`Downloaded ${img.name}`);
            });
        }
    }).on('error', function (err) {
        fs.unlink(destDir);
        console.error(`Error downloading ${img.name}: ${err.message}`);
    });
});
