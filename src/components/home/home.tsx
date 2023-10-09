import homeStyle from "./home.module.scss";
import { Footer } from "../footer/footer";
import { Marquee } from "../marquee/marquee";
import { Header } from "../header/header";
import { About } from "../about/about";
import { Theories } from "../theories/theories";
import { Communications } from "../communications/communications";
import { Resources } from "../resources/resources";
import Reveal from "../../utils/reveal";

export default function Home() {
  return (
    <>
      <div className={homeStyle.homeContainer} id="home-section">
        <Header></Header>
        <Reveal y={200} duration={1}>
          <About></About>
        </Reveal>
        <Marquee
          firstLap={"WHENWASTHELASTTIMEYOUTALKEDTOANINSECT?"}
          secondLap={"WHENWASTHELASTTIMEYOUTALKEDTOANINSECT?"}
        ></Marquee>

        <div className={homeStyle.yAxisContainer}>
          <Reveal duration={1}>
            <div className={homeStyle.theories}>
              <Theories></Theories>
            </div>
          </Reveal>
          <Reveal duration={1}>
            <Communications></Communications>
          </Reveal>
          <Reveal duration={1}>
            <Resources></Resources>
          </Reveal>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
