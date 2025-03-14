import useFetchData from "../../utils/hooks/useFetchData";
import { useParams } from "react-router-dom";


function DetailsCategory() {
  const params = useParams();
  const { data } = useFetchData(`/lookup.php?i=${params.id}`);

  console.log(params.id);
  console.log(data);
  
  return (
    <div style={{ padding: "32px 16px" }}>

      <h3>{data.drinks[0].strDrink}</h3>
      <div
        style={{
          padding: "24px 0",
          display: "flex",
          gap: "32px",
          flexWrap: "wrap",
          justifyContent: "center"
        }} >
      </div>
    </div>
  );
}

export default DetailsCategory;
