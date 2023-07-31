import Header from "../../components/header/Header";
import Banner from "../../components/header/Banner";
import Wedo from "../../components/home/Wedo";
import Team from "../../components/home/Team";
import Message from "../../components/home/Message";
import About from "../../components/home/About";
import OurEvents from "../../components/home/OurEvents";
import OurCauses from "../../components/home/OurCauses";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Wedo />
      <Team />
      <Message />
      <About />
      <OurEvents />
      <OurCauses />
    </div>
  );
};

export default Home;
