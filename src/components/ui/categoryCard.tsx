import { useNavigate } from "react-router-dom";

interface DrinkCardProps {
  name: string;
  link: string;
  id: string;
}

const DrinkCard: React.FC<DrinkCardProps> = ({ name, link, id }) => {
  const navigate = useNavigate();

  const goVisit = () => {
    navigate(`/drinks/${id}`);
  };

  return (
    <div
      style={{
        display: "flex", // fixed typo "felx" to "flex"
        flexDirection: "column", // corrected "flex" to "flexDirection"
        width: "200px",
        height: "300px",
        border: "16px solid", // added border style for better visibility
        borderRadius:"8px",
        padding: "16px",
        justifyContent: "space-between",
        boxShadow: "0px 4px 6px", 
        overflow:"hidden",
      }}
    >
      <div
        style={{flex: "1"
          //   width: "100%",
          //   height: "100%",
}}
      >
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "4px"
          }}
          src={link}
          alt={`${name} img`}
        />
      </div>

      <div style={{ padding: "2px",}}>
        <h4 style={{ fontSize: "14px", margin: "0px" }}>{name}</h4>
        <p style={{ margin: "0px", fontSize:"11px" }}>ID: {id}</p>
        <button onClick={goVisit}>Details</button> {/* standard button element */}
      </div>
    </div>
  );
};

export default DrinkCard;