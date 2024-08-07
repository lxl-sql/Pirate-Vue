import {createI18n} from 'vue-i18n'
import zh from './zh'
import en from './en'
import {$local} from "@/utils/storage";

const messages = {
  en,
  zh,
}

const language = (navigator.language || 'en').toLocaleLowerCase() // 这是获取浏览器的语言
const i18n = createI18n({
  legacy: false, // 设置为 false，启用 composition API 模式
  locale: $local.get("lang") || language.split('-')[0] || 'en', // 首先从缓存里拿，没有的话就用浏览器语言，
  fallbackLocale: 'en', // 设置备用语言
  messages,
})


export default i18n
