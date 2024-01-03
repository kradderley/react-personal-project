import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import home from "../svg-components/restaurant.svg";
import gluten from "../svg-components/glutenfree.svg";
import keto from "../svg-components/keto.svg";
import vegetarian from "../svg-components/vegetarian.svg";
import vegan from "../svg-components/vegan.svg";
import pescaterian from "../svg-components/fish.svg";
import others from "../svg-components/nutrition.svg";
import { Menu } from "../Styling";
import { FaBars } from "react-icons/fa";

const Categories = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Menu>
        <nav>
          <Link style={{ textDecoration: "none" }} to={"/"}>
            <h1>La Recette</h1>
          </Link>
          <div
            className="menu-bar"
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
          >
            <FaBars size={40} />
          </div>
          <ul className={openMenu ? "open" : ""}>
            <NavLink style={{ textDecoration: "none" }} to={"/"}>
              <li>
                <img src={home} alt="home" />
                <h3>Home</h3>
              </li>
            </NavLink>
            <NavLink
              style={{ textDecoration: "none" }}
              to={"/categories/glutenfree"}
            >
              <li>
                <img src={gluten} alt="gluten-free" />
                <h3>Gluten-Free</h3>
              </li>
            </NavLink>
            <NavLink style={{ textDecoration: "none" }} to={"/categories/keto"}>
              <li>
                <img src={keto} alt="keto" />
                <h3>Keto</h3>
              </li>
            </NavLink>
            <NavLink
              style={{ textDecoration: "none" }}
              to={"/categories/vegeterian"}
            >
              <li>
                <img src={vegetarian} alt="vegetarian" />
                <h3>Vegeterian</h3>
              </li>
            </NavLink>
            <NavLink
              style={{ textDecoration: "none" }}
              to={"/categories/vegan"}
            >
              <li>
                <img src={vegan} alt="vegetarian" />
                <h3>Vegan</h3>
              </li>
            </NavLink>
            <NavLink
              style={{ textDecoration: "none" }}
              to={"/categories/pescaterian"}
            >
              <li>
                <img src={pescaterian} alt="pescaterian" />
                <h3>Pescatarian</h3>
              </li>
            </NavLink>
            <NavLink
              style={{ textDecoration: "none" }}
              to={"/categories/paleo"}
            >
              <li>
                <img src={others} alt="paleo" />
                <h3>Paleo</h3>
              </li>
            </NavLink>
          </ul>
        </nav>
      </Menu>
    </>
  );
};

export default Categories;
