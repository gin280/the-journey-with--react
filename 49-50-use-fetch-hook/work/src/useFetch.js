import { useState, useEffect } from "react";
export const useFetch = (url, options) => {
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url, {
          ...options,
          signal: controller.signal,
        });
        const json = await res.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        if (error.name === "AbortError") return;
        setError(error);
      }
    };
    fetchData();
    return () => {
      controller.abort();
    };
  }, [url, options]);

  return { isLoading, isError, data };
};
