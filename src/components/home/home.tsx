import homeStyle from "./home.module.scss";
import { Footer } from "../footer/footer";
import { Marquee } from "../marquee/marquee";
import { Header } from "../header/header";
import { About } from "../about/about";
import { Theories } from "../theories/theories";
import { Communications } from "../communications/communications";
import { Resources } from "../resources/resources";

export default function Home() {
  return (
    <>
      <div className={homeStyle.homeContainer} id="home-section">
        <Header></Header>
        <About></About>
        <Marquee
          firstLap={"WHENWASTHELASTTIMEYOUTALKEDTOANINSECT?"}
          secondLap={"WHENWASTHELASTTIMEYOUTALKEDTOANINSECT?"}
        ></Marquee>
        <div className={homeStyle.yAxisContainer}>
          <div className={homeStyle.theories}>
            <Theories></Theories>
          </div>
          <Communications></Communications>
          <Resources></Resources>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
