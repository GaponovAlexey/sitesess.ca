import Layout from "./layout"
import AnswerBlock from "./page/AnswerBlock"
import AppliMap from "./page/AppliMap"
import LandingUse from "./page/LandingUse"
import MainPageOne from "./page/MainPageOne"
import Marketing from "./page/Marketing"
import OurStrengths from "./page/OurStrengths"

const Main = () => {
  return (
    <Layout>
      <MainPageOne />
      <AnswerBlock />
      <LandingUse />
      <OurStrengths />
      <AppliMap />
      <Marketing />
    </Layout>
  )
}

export default Main
