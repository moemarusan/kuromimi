/**
 * @type {import('puppeteer').Configuration}
 */
module.exports = {
    cacheDirectory: require("path").join("./", ".cache", "puppeteer"),
}