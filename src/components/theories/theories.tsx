import { useEffect, useRef, useState } from "react";
import { AreciboMessage } from "../arecibo/arecibo.message";
import theoriesStyle from "./theories.module.scss";
import { TiThSmallOutline, TiThSmall } from "react-icons/ti";

export function Theories() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    const currentRef = ref.current;

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <>
      <section
        className={theoriesStyle.theoriesContainer}
        id="theories-section"
      >
        <div className={theoriesStyle.theoriesText}>
          <h2>Theories</h2>
          <p className={theoriesStyle.theoriesParagraph}>
            We've been looking for over 60 years. And so that leads some people
            to say we must be alone. The reality is, though, we have just begun
            the search. I mean, we've looked at a few tens of thousands of
            stars, and there are 400 billion stars in our galaxy alone. Billions
            of galaxies in the universe. So I think we just need to keep on
            looking. When you put it that way, it actually isn't that
            surprising, is it? <br /> <br />I mean, we are still discovering
            species on our own planet today. At METI, we switch the process, and
            instead of just listening for signals, we send powerful, intentional
            signals to other stars in the hope of getting a reply. What do you
            say to people who go, "Hold on, "we should not be alerting any life
            out there to our presence. "It's just not worth the risk. In fact,
            it's irresponsible." I would say it is too late. The horse is out of
            the barn. We have been announcing our presence to the universe since
            the beginning of radio and television. Any civilization that has the
            ability to travel between the stars already picked up I Love Lucy.
            <br />
            <br />
            The Arecibo message, sent from the Arecibo Observatory by a group of
            scientists in Puerto Rico in 1974, was a three-minute message of
            exactly 1,679 binary digits, arranged into 73 lines of 23 characters
            per line (these are both prime numbers and may help the aliens
            decode the message). Written with the assistance of Carl Sagan, the
            message itself could be arranged in a rectangular grid of 0s and 1s
            to form a pictograph representing us.
          </p>
        </div>
        <div className={theoriesStyle.theoriesImage}>
          <div className={theoriesStyle.arecibo} ref={ref}>
            {isVisible && <AreciboMessage></AreciboMessage>}
          </div>
        </div>
      </section>
      <div className={theoriesStyle.areciboPost}>
        <TiThSmallOutline />
        <p className={theoriesStyle.post}>
          The code shows fundamental facts of mathematics, human DNA, planet
          earth's place in the solar system, and a picture of a human-like
          figure as well as an image of the telescope itself. The Arecibo
          Message was aimed towards the globular star cluster Messier 13, 25,000
          light years away, in an attempt to contact extraterrestrial
          intelligence.
        </p>
        <TiThSmall />
      </div>
    </>
  );
}
