import { NavLink } from "react-router-dom";
import { Header } from "../Styling";
import { FaBars } from "react-icons/fa";

const Heading = () => {
  return (
    <>
      <Header>
        <NavLink to={"/"}>
          <h1>La Recette</h1>
        </NavLink>
        <button className="menu-bar">
          <FaBars  size="30px" />
        </button>
      </Header>
    </>
  );
};

export default Heading;
