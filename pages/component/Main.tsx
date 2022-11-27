import s from "../../styles/main.module.scss";
import Layout from "./layout";
import AppliMap from "./page/AppliMap";
import LandingUse from "./page/LandingUse";
import MainPageOne from "./page/MainPageOne";
import Marketing from "./page/Marketing";
import OurStrengths from "./page/OurStrengths";

const Main = () => {
  console.log("init")

  
  return (
    <Layout>
      <MainPageOne />
      <PageWhite />
      <LandingUse />
      <OurStrengths />
      <AppliMap />
      <Marketing />
    </Layout>
  );
};

//one




//2
const PageWhite = () => {
  return (
    <div className={s.main_white}>
      <h3>
        But, sometimes it may feel like you are doing it alone. Good news,
        you’re not! <br />
        We are here to help you with all those things you may not be able to do
        yourself, such as web development and marketing
      </h3>
      <div />
    </div>
  );
};



export default Main;
