
import { useParams } from "react-router-dom"; // Correct import
import useFetchData from "../../utils/hooks/useFetchData";
import Details from "../ui/detailsAboutDrink";

function DetailsCategory() {
  const params = useParams();
  const { data } = useFetchData(`/lookup.php?i=${params.id}`);
  
  console.log(params.id);
  console.log(data);

//   if (!data || !data.drinks) {
//     return <p>Loading...</p>;
//   }

  return (
    <div style={{ padding: "32px 16px" }}>
      {/* <h3>{data && data.drinks && data.drinks[0].strDrink}</h3> */}
      <div
        style={{
          padding: "24px 0",
          display: "flex",
          gap: "32px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Details {...(data && data.drinks ? data.drinks[0]: {})}/>
      </div>
    </div>
  );
}

export default DetailsCategory;
