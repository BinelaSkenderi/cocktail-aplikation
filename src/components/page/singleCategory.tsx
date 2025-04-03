
import { useParams } from "react-router-dom"; // Correct import
import useFetchData from "../../utils/hooks/useFetchData";
import DrinkCard from "../ui/categoryCard";
import Category from "./category";

interface Drink {
  idDrink: string;
  strCategory: string;
  strDrink: string;
  strInstructions: string;
  strDrinkThumb?: string; // Gör strDrinkThumb valfri, eftersom den kanske inte alltid finns
}

function SingleCategory() {
  const params = useParams<{ Category: string }>();

  // Hämtar data med formaterad kategori
  const { data } = useFetchData(
    `filter.php?c=${params.Category?.includes("_or_")
      ? params.Category.replace("_or_", "_/ ")
      : params.Category}`
  );
  

  // Formaterar kategorinamnet för att visa det korrekt
  const formattedCategory = params.Category?.replace(/_or_/g, "/").split("_").join(" ");


  return (
    <div style={{ padding: "32px 16px" }}>
      <h3>{formattedCategory}</h3>
      <div
        style={{
          padding: "24px 0",
          display: "flex",
          gap: "32px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {data && data.drinks ? (
          data.drinks.map((drink: Drink) => {
            // Säkerställ att strDrinkThumb finns eller använd en fallback bild
            const drinkImage = drink.strDrinkThumb
              ? drink.strDrinkThumb
              : "default-image-url.jpg"; // Sätt din egen fallback bild här

            return (
              <DrinkCard
                key={drink.idDrink}
                id={drink.idDrink}
                link={drinkImage} // Använd den säkra bild-URL
                name={drink.strDrink}
              />
            );
          })
        ) : null}
      </div>
    </div>
  );
}

export default SingleCategory;
