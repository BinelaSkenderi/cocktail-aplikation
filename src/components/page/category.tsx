import { useState } from "react";
import Button from "../ui/button";
import useFetchData from "../../utils/hooks/useFetchData";
import { useNavigate } from "react-router-dom"; // Correct import

interface Drink {
  idDrink: string;
  strCategory: string;
  strDrink: string;
  strInstructions: string;
}

function Category() {
  const navigate = useNavigate();

  const { data } = useFetchData("list.php?c=list");

  const onClick = (route: string) => {
    const finalRoute = route.replace(/\//g, "or").split(" ").join("_");
    navigate(`/Category/${finalRoute}`);
  };


  return (
    <div style={{ padding: "32px 16px" }}>
      <h3>Category</h3>
      <div style={{ padding: "24px 0" }}>
        {data?.drinks?.map(
          (drink: { strCategory: string; idDrink: string }, index: number) => (
            <Button
              key={drink.idDrink}
              text={drink.strCategory}
              tip={"default"}
              onClickButton={() => onClick(drink.strCategory)}
            />
          ),
        )}
      </div>
    </div>
  );
}
export default Category;
