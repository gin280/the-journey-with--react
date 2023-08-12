import { useCallback, useState } from "react";

export const useArray = (initialArray) => {
  const [array, setArray] = useState(initialArray);

  const set = (newArray) => {
    setArray(newArray);
  };

  const push = useCallback((element) => {
    setArray((a) => [...a, element]);
  }, []);

  const filter = (callback) => {
    setArray(array.filter(callback));
  };

  const replace = (index, item) => {
    setArray([...array.slice(0, index), item, ...array.slice(index + 1)]);
  };

  const remove = (index) => {
    setArray([
      ...array.slice(0, index),
      ...array.slice(index + 1, index.length),
    ]);
  };

  const clear = () => {
    setArray([]);
  };

  const reset = () => {
    setArray(initialArray);
  };

  return {
    array,
    set,
    push,
    filter,
    replace,
    remove,
    clear,
    reset,
  };
};
