import { NavLink } from "react-router-dom";
import { Header } from "../Styling";

const Heading = () => {
  return (
    <>
      <Header>
        <NavLink to={"/"}>
          <h1>La Recette</h1>
        </NavLink>
      </Header>
    </>
  );
};

export default Heading;
