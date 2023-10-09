import AllEvents from "../Components/AllEvents";
import AllServices from "../Components/AllServices";
import Slider from "../Components/Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <AllServices></AllServices>
      <AllEvents></AllEvents>
    </div>
  );
};

export default Home;
