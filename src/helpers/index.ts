export const setLocalStorageItem = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorageItem = (key: string) => {
  const storageItem = localStorage.getItem(key);

  return storageItem ? JSON.parse(storageItem) : null;
};
