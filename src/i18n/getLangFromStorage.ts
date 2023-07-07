const getLangFromStorage = (storage: Storage, langKey: string): string => {
  return storage.getItem(langKey);
}
export default getLangFromStorage;