const { devices } = require("playwright");

class ConfigHelper {
    static getUrl() {
        if (process.env.URL) {
            return 'https://${process.env.URL}.com';
        }

        return 'https://mainpage.com'

    }

    static getBrowser() {
        if (process.env.BROWSER) {
            return '${process.env.BROWSER}'
        }

        return 'chromium'

    }
    
    static getOSMobile() {
        if (process.env.OSMOBILE) {
            return devices['${process.env.OSMOBILE} 11']
        }
        
        return 'Pixel 3'
    }
}

module.exports = ConfigHelper;
