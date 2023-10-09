import AllEvents from "../Components/AllEvents";
import AllServices from "../Components/AllServices";
import NewsLetter from "../Components/NewsLetter";
import Slider from "../Components/Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <AllServices></AllServices>
      <AllEvents></AllEvents>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
