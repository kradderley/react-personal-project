import Categories from "../home-page-components/Categories";
import Dessert from "../home-page-components/Dessert";
import Featured from "../home-page-components/Featured";
import Search from "../home-page-components/Search";
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
