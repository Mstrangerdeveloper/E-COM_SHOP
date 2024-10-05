import Navbar from "../comonents/Navbar";
import Productlist from "../features/Product-list/Productlist";

const Home = () => {
  return (
    <div>
      <Navbar>
        <Productlist></Productlist>
      </Navbar>
    </div>
  );
};

export default Home;
