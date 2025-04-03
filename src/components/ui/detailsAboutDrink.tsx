import { useEffect, useState } from "react";


function Details(props) {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    if (props && Object.keys(props).length > 0) {
      const array = [];

      for (let i = 1; i <= 15; i++) {
        if (props[`strIngredient${i}`]) { // Bara lägga till om det finns en ingrediens
          array.push({
            ingredient: props[`strIngredient${i}`],
            quantity: props[`strMeasure${i}`] || "Efter smak",
          });
        }
      }
      setIngredients(array);
    }
  }, [props]);

  return (
    <div style={{ backgroundColor: "wheat", width: "100%", padding: "16px", borderRadius: "8px" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "32px" }}>
        {/* Bild på drinken */}
        <div style={{ width: "300px", height: "300px", borderRadius: "8px", overflow: "hidden" }}>
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src={props.strDrinkThumb}
            alt={props.strDrink}
          />
        </div>

        {/* Drinkens information */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            color: "black",
            flex: 1,
          }}
        >
          <h2 style={{ margin: 0 }}>{props.strDrink}</h2>
          <p style={{ margin: 0, fontWeight: "bold" }}>ID: {props.idDrink}</p>
          <p><strong>Typ av glas:</strong> {props.strGlass}</p>
          <p><strong>Alkohol:</strong> {props.alcoholic === "Alcoholic" ? "Ja" : "Nej"}</p>
          <p><strong>Instruktioner:</strong> {props.strInstructions}</p>
        </div>
      </div>

      {/* Ingredienser */}
      <div style={{color:"black", marginTop: "20px" }}>
        <h3>Ingredienser:</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {ingredients.length > 0 ? (
            ingredients.map((item, index) => (
              <li key={index} style={{ padding: "4px 0", borderBottom: "1px solid #ccc" }}>
                <strong>{item.ingredient}</strong>: {item.quantity}
              </li>
            ))
          ) : (
            <p>Inga ingredienser tillgängliga.</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Details;
