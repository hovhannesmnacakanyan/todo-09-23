import { useEffect } from "react";
import { setLocalStorageItem } from "../helpers";

export const useSetLocalStorage = (key: string, value: any) => {
  useEffect(() => {
    setLocalStorageItem(key, value);
  }, [key, value]);
};
