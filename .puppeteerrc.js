console.log('Puppeteer configuration loaded successfully');

/**
 * @type {import('puppeteer').Configuration}
 */
module.exports = {
    cacheDirectory: require("path").join(__dirname, ".cache", "puppeteer"),
}