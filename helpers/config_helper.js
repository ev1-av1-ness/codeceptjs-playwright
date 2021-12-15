class ConfigHelper {
    static getUrl() {
      if (process.env.URL) {
        return `https://www.${process.env.URL}.ru`;
      }
  
      return 'https://www.superjob.ru';
    }
  }
  
  module.exports = ConfigHelper;
  