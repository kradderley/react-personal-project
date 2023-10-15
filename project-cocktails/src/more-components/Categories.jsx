import "../more-components/Featured.css";
import { NavLink } from "react-router-dom";
import home from "../svg-components/restaurant.svg";
import gluten from "../svg-components/glutenfree.svg";
import keto from "../svg-components/keto.svg";
import vegetarian from "../svg-components/vegetarian.svg";
import vegan from "../svg-components/vegan.svg";
import pescaterian from "../svg-components/fish.svg";
import others from "../svg-components/nutrition.svg";
import styled from "styled-components";

const Categories = () => {
  return (
    <>
      <div className="nav-headings">
        <NavLink to={"/"}>
          <img className="logo" src={home} alt="home" />
          <h3>Home</h3>
        </NavLink>
        <NavLink to={"/categories/glutenfree"}>
          <img className="logo" src={gluten} alt="gluten-free" />
          <h3>Gluten-Free</h3>
        </NavLink>
        <NavLink to={"/categories/keto"}>
          <img className="logo" src={keto} alt="keto" />
          <h3>Keto</h3>
        </NavLink>
        <NavLink to={"/categories/vegeterian"}>
          <img className="logo" src={vegetarian} alt="vegetarian" />
          <h3>Vegeterian</h3>
        </NavLink>
        <NavLink to={"/categories/vegan"}>
          <img className="logo" src={vegan} alt="vegetarian" />
          <h3>Vegan</h3>
        </NavLink>
        <NavLink to={"/categories/pescaterian"}>
          <img className="logo" src={pescaterian} alt="pescaterian" />
          <h3>Pescatarian</h3>
        </NavLink>
        <NavLink to={"/categories/paleo"}>
          <img className="logo" src={others} alt="others" />
          <h3>Others</h3>
        </NavLink>
      </div>
    </>
  );
};



export default Categories;
