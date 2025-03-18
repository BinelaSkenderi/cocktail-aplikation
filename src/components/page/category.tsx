import { useNavigate } from "react-router-dom";
import Button from "../ui/button";
import useFetchData from "../../utils/hooks/useFetchData";

// Typa data som den förväntade typen som vi definierade i useFetchData
interface Drink {
  idDrink: string;
  strCategory: string;
  strDrink: string;
  strInstructions: string;
}

function Category() {
  const navigate = useNavigate();
  const { data, error } = useFetchData("list.php?c=list");

  // Hantera om det finns ett fel
  if (error) {
    return <p>Error: {error}</p>;
  }

  const onClick = (route: string) => {
    const finalRoute = route.replace(/\//g, "or").split(" ").join("_");
    navigate(`/Category/${finalRoute}`);
  };

  return (
    <div style={{ padding: "32px 16px" }}>
      <h3>Category</h3>
      <div style={{ padding: "24px 0" }}>
        {data?.drinks?.map((drink: Drink) => (
          <Button
            key={drink.idDrink} // Använd idDrink som key, vilket är unikt för varje drink
            text={drink.strCategory}
            tip={"default"}
            onClickButton={() => onClick(drink.strCategory)}
          />
        ))}
      </div>
    </div>
  );
}

export default Category;
