import { Link } from "react-router-dom";

function Navigation() {
  
  return (
    <div
      style={{
        padding: "16px",
        backgroundColor: "#000",
        color: "#fff",
        display: "flex",
        flexWrap: "wrap",
        gap: "24px",
        margin: "0 auto",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Link to="/"> Home </Link>
      <Link to="/Category"> Category </Link>
      <Link to="/AboutUs"> About us </Link>
    </div>
  );
}

export default Navigation;
