import { useState } from "react";
import Button from "../ui/button";
import useFetchData from "../../utils/hooks/useFetchData";
import { useParams } from "react-router-dom"; // Correct import
import DrinkCard from "../ui/categoryCard";

interface Drink {
  idDrink: string;
  strCategory: string;
  strDrink: string;
  strInstructions: string;
}

function SingleCategory() {
  const params = useParams<{ Category: string }>();
  const { data } = useFetchData(`filter.php?c=${params.Category?.includes("_or_")?params.Category.replace("_or_","_/ "):params.Category}`);
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
          justifyContent: "center"
        }}
      >
        {data && data.drinks? 
          data.drinks.map((drink) => {
              return (
                <DrinkCard
                  id={drink.idDrink}
                  link={drink.strDrinkThumb}
                  name={drink.strDrink}
                  key={drink.idDrink} 
                />
              );
            })
          : null}
      </div>
    </div>
  );
}

export default SingleCategory;
