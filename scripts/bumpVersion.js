// scripts/bumpVersion.js
const fs = require('fs');
const path = require('path');


// Read the current version from package.json
const packagePath = path.join(__dirname, '../package.json');
const packageJSON = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
const currentVersion = packageJSON.version;


// Parse version components
const [major, minor, patch] = currentVersion.split('.').map(Number);


// Bump patch version
const newVersion = `${major}.${minor}.${patch + 1}`;
packageJSON.version = newVersion;


// Write updated package.json
fs.writeFileSync(packagePath, JSON.stringify(packageJSON, null, 2));


// Update iOS version
const iosInfoPath = path.join(__dirname, '../ios/demo/Info.plist');
let iosInfo = fs.readFileSync(iosInfoPath, 'utf8');
iosInfo = iosInfo.replace(
    /<key>CFBundleShortVersionString<\/key>\s*<string>.*?<\/string>/,
    `<key>CFBundleShortVersionString</key>\n\t<string>${newVersion}</string>`
);
iosInfo = iosInfo.replace(
    /<key>CFBundleVersion<\/key>\s*<string>.*?<\/string>/,
    `<key>CFBundleVersion</key>\n\t<string>${patch + 1}</string>`
);
fs.writeFileSync(iosInfoPath, iosInfo);


// Update Android version
const androidGradlePath = path.join(__dirname, '../android/app/build.gradle');
let androidGradle = fs.readFileSync(androidGradlePath, 'utf8');
androidGradle = androidGradle.replace(
    /versionName ".*?"/,
    `versionName "${newVersion}"`
);
androidGradle = androidGradle.replace(
    /versionCode \d+/,
    `versionCode ${(major * 10000) + (minor * 100) + patch + 1}`
);
fs.writeFileSync(androidGradlePath, androidGradle);


console.log(`Version bumped from ${currentVersion} to ${newVersion}`);