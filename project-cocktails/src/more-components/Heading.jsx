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

        <FaBars className="menu-bar" size="30px" />
      </Header>
    </>
  );
};

export default Heading;
