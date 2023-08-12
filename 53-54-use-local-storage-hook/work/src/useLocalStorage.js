import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    const defaultValue =
      typeof initialValue === "function" ? initialValue() : initialValue;

    return JSON.parse(item) ? JSON.parse(item) : defaultValue;
  });

  const setLocalStorage = (newValue) => {
    setValue((prevValue) => {
      const finalValue =
        typeof newValue === "function" ? newValue(prevValue) : newValue;
      window.localStorage.setItem(key, JSON.stringify(finalValue));
      return finalValue;
    });
  };

  return [value, setLocalStorage];
};
