import CustomBut from "../utils/CustomBut"
import s from "../../../styles/main.module.scss"
import ScrollPath from "../utils/ScrollPath"
import { motion } from "framer-motion"

const MainPageOne = () => {
  return (
    <div className={s.container_main}>
      <div id="home">
        <motion.div
          className={s.devLogoText}
          initial={{ y: -400 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
        >
          The development company
        </motion.div>
        <motion.div
          className={s.logoText}
          initial={{ y: -400 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Sitesess.ca
        </motion.div>
        <h2>We Know You Are Passionate About Your Small Business</h2>
        <h4>We help businesses turn ideas into effective products</h4>
        <div className="text-center pt-10 hover:scroll-auto ">
          <ScrollPath to="application">
            <CustomBut name="Connect us" />
          </ScrollPath>
        </div>
      </div>
      <div className={s.main_img}></div>
    </div>
  )
}

export default MainPageOne
