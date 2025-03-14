import { useState } from "react";
import Button from "../ui/button";
import useFetchData from "../../utils/hooks/useFetchData";
import Facts from "./facts";
import { useNavigate } from "react-router-dom";


function Home() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/Category");
  };

  return (
    <div
      style={{
        padding: "32px 16px",
      }}
    >
      <h3>
        Welcome to our website, click on the button and view the categories
      </h3>
      <Button text={"Category"} tip={"default"} onClickButton={onClick} />
    </div>
  );
}

export default Home;
