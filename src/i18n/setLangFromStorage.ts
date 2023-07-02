import getLangFromStorage from "./getLangFromStorage";
import i18n from "./i18n";

const setLangFromStorage = (storage: Storage, langKey: string): void => {
  const langValue = getLangFromStorage(storage, langKey);
  if (langValue) {
    i18n.changeLanguage(langValue);
  }
}
export default setLangFromStorage;