const {join} = require('path');
/**
 * @type {import('puppeteer').Configuration}
 */
module.exports = {
    cacheDirectory: join(__dirname, '.cache', 'puppeteer'),
};

console.log(process.env.PUPPETEER_EXECUTABLE_PATH);