import Categories from "../more-components/Categories";
import Dessert from "../more-components/Dessert";
import Featured from "../more-components/Featured";
import Heading from "../more-components/Heading";
import Search from "../more-components/Search";

const Home = () => {
  return (
    <>
      <Heading />
      <Categories />
      <Search />
      <Featured />
      <Dessert />
    </>
  );
};

export default Home;
