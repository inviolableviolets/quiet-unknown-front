import { Gallery } from "../gallery/gallery";
import communicationsStyle from "./communications.module.scss";
export function Communications() {
  return (
    <>
      <img
        src="/communications.png"
        alt="Communications"
        className={communicationsStyle.communications}
      />

      <section
        className={communicationsStyle.communicationsContainer}
        id="communications-section"
      >
        <div className={communicationsStyle.communicationsText}>
          <h2>Communications</h2>
          <h3>Communications</h3>
          <p>
            Anyone and everyone can transmit to extraterrestrials. So I think
            it's an incredible contradiction for people involved in SETI to say
            we shouldn't transmit, because the day they succeed, everyone will
            be transmitting. Okay, so how do we craft a message for E.T.? Well,
            it depends what we would want to do. I would want to know something
            about that civilization. And so then we try to figure out, what is
            it that we have in common with the extraterrestrials? What do you
            think the aliens would know that we know?
            <br></br>
            <br></br>
            Don't be shy. We want you to share your experiences in a non
            envolving any gigantic radio-telescope way.
          </p>
        </div>
      </section>
      <Gallery></Gallery>
    </>
  );
}
