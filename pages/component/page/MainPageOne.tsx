import CustomBut from "../utils/CustomBut";
import s from "../../../styles/main.module.scss";
import Link from "next/link";

const MainPageOne = () => {
  return (
    <div className={s.container_main}>
      <div id="home">
        <h3>The development company</h3>
        <h1>Sitesess.ca</h1>
        <h2>We Know You Are Passionate About Your Small Business</h2>
        <h4>We help businesses turn ideas into effective products</h4>
        <div className="text-center pt-10 hover:scroll-auto">
          <Link href="#application" className="js-scroll ">
            <CustomBut name="Connect us" />
          </Link>
        </div>
      </div>
      <div className={s.main_img}></div>
    </div>
  );
};

export default MainPageOne;
