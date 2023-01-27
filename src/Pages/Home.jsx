import React from "react";
import Navbar from "../Components/Navbar";
import Background from "../images/background.jpg";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="background-container">
        <div>
          <div className="background-text">
            La joyería es una expresión artística.
          </div>
          <img className="background-image" src={Background} />
        </div>
      </div>
    </>
  );
};

export default Home;
