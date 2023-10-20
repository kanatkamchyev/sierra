import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ru: {
        translation: {
          more: 'Подробнее',
          add: 'Добавить',
          added: 'Добавлено',
          clear: 'Очистить',
          choose:"Давайте выберем щось смачненьке",
          empty:"Ой а тут пусто :(",
          sweet:"Смачненьке",
          search:"Поиск",
          back:"Назад",

        },
      },
      kg: {
        translation: {
          more: 'Маалымат',
          add: 'Кошуу',
          added: 'Кошулду',
          clear: 'Тазалоо',
          choose:"Келгиле, даамдуу бир нерсе тандайлы",
          empty:"Ой бул жерде бош :(",
          sweet:"Даамдуу",
          search:"Издөө",
          back:"Артка",

        },
      },
    },
    lng: 'ru',
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;