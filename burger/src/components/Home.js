import React from "react";
import { Link } from "react-router-dom";
import BurgerBackground from "../assets/burgerBackground.jpg";
import "../styles/Home.css";

const Home = () => {
  return (
    <div
      className="mainPage"
      style={{ backgroundImage: `url(${BurgerBackground})` }}
    >
      <div className="order">
        <Link to="/menu">
          <button>SİPARİŞ VER</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
