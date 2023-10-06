import marqueeStyle from "./marquee.module.scss";

type Propstype = {
  firstLap: string;
  secondLap: string;
};

export function Marquee({ firstLap, secondLap }: Propstype) {
  return (
    <>
      <section className={marqueeStyle.container}>
        <div className={marqueeStyle.marquee}>
          <span className={marqueeStyle.text1}>{firstLap}</span>
          <span className={marqueeStyle.text2}>{secondLap}</span>
        </div>
        <img
          src="/breakpoint.jpg"
          alt="UFO Lights"
          className={marqueeStyle.ufoBreakpoint}
        />
      </section>
    </>
  );
}
