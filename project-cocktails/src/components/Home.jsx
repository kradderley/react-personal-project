import Categories from "../more-components/Categories";
import Dessert from "../more-components/Dessert";
import Featured from "../more-components/Featured";
import Search from "../more-components/Search";

const Home = () => {
  return (
    <>
      <Search />
      <Categories />
      <Featured />
      <Dessert />
    </>
  );
};

export default Home;
