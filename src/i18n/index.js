import { createI18n } from 'vue-i18n/index';

const messages = {
  en: {
    login: {
      welcome: "Welcome to our social network!",
    },
  },
  ru: {
    login: {
      welcome: "Добро пожаловать в нашу социальную сеть!"
    }
  }
};

export default createI18n({
  locale: "ru",
  messages,
});



