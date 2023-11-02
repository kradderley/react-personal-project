import Categories from "../more-components/Categories";
import Dessert from "../more-components/Dessert";
import Featured from "../more-components/Featured";
import Search from "../more-components/Search";

const Home = () => {
  return (
    <>
      <Categories />
      <Search />
      <div
        style={{
          margin: 100,
          marginBottom: 50,
        }}
      >
        <Featured />
        <Dessert />
      </div>
    </>
  );
};

export default Home;
