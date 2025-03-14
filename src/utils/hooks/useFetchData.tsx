import axios from "axios";
import { useState, useEffect } from "react";

function useFetchData(url: string) {
  const instance = axios.create({
    baseURL: "https://www.thecocktaildb.com/api/json/v1/1/",
  });

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  async function getFact() {
    try {
      const response = await instance.get(url);

      if (response.data) {
        setData(response.data);
        setError(null);
      }
    } catch (error) {
      if (error) {
        setError(error.message);
        setData(null);
      }
    }
  }

  useEffect(() => {
    getFact();
  }, []);

  return { data, error };
}

export default useFetchData;
