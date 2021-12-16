class ConfigHelper {
    static getUrl() {
        if (process.env.URL) {
            return 'https://${process.env.URL}.com';
        }

        return 'https://mainpage.com'

    }

    //я попробовала и с браузером так сделать
    static getBrowser() {
        if (process.env.BROWSER) {
            return '${process.env.BROWSER}'
        }

        return 'chromium'

    }   

}

module.exports = ConfigHelper;
