import Categories from "../more-components/Categories";
import Dessert from "../more-components/Dessert";
import Featured from "../more-components/Featured";
import Search from "../more-components/Search";
import "./Home.css"

const Home = () => {
  return (
    <>
      <Categories />
      <Search />
      <div className="home-screen-styling">
        <Featured />
        <Dessert />
      </div>
    </>
  );
};

export default Home;
