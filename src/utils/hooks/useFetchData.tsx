import axios from "axios";
import { useState, useEffect } from "react";

// Definiera typen för en drinkkategori
interface Drink {
  idDrink: string;
  strCategory: string;
  strDrink: string;
  strInstructions: string;
}

// Definiera typen för API-svaret
interface DrinkCategoryResponse {
  drinks: Drink[]; // Array av Drink-objekt
}

function useFetchData(url: string) {
  const instance = axios.create({
    baseURL: "https://www.thecocktaildb.com/api/json/v1/1/",
  });

  const [data, setData] = useState<DrinkCategoryResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Funktion för att hämta data
  async function getFact() {
    try {
      const response = await instance.get(url);

      if (response.data) {
        setData(response.data);
        setError(null); // Inget fel
      }
    } catch (error: any) {
      setError(error.message); // Om det uppstår ett fel, sätt error
      setData(null); // Rensa eventuell data
    }
  }

  useEffect(() => {
    getFact(); // Kör hämtningsfunktionen när komponenten renderas
  }, [url]); // Lägg till `url` som beroende för att återhämta data när URL ändras

  return { data, error };
}

export default useFetchData;
