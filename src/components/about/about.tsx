import aboutStyle from "./about.module.scss";

export function About() {
  return (
    <>
      <section className={aboutStyle.aboutSection} id="main-title">
        <div className={aboutStyle.heroSection}>
          <img
            src="/lageos.png"
            alt="Lageos Plaque"
            className={aboutStyle.lageos}
          />
          <hgroup>
            <h2>ARCHIVE</h2>
            <h2>OF THE</h2>
            <span className={aboutStyle.stroke}>UNHEARD</span>
          </hgroup>
          <div className={aboutStyle.heroTitle}>
            <h1>
              <span>ARCHIVE OF</span>
              <div className={aboutStyle.secondLine} id="about-section">
                <span>THE</span>{" "}
                <span className={aboutStyle.stroke}>UNHEARD</span>
              </div>
            </h1>
          </div>

          <img
            src="/about-bg-v2.jpg"
            alt="UFO Sighting movie recreation"
            className={aboutStyle.ufo}
          />
        </div>
      </section>
      <section className={aboutStyle.aboutText}>
        <p>
          Ever since I was a kid, I've wanted to design a message that is sent
          to outer space. A sort of hello from Earth to whatever
          extraterrestrials might be out there. I mean, come on, to be the
          author of the first thing aliens ever heard from our entire planet
          would be a fantastic honor. And as it turns out, an opportunity to
          send a message to space has been given to me. But it might be a waste
          of time. What if there isn't anything or anyone out there to receive
          it? The fact that we still have no evidence of intelligent alien life
          despite the high probability that such life exists, is called the
          Fermi paradox.
          <br />
          <img src="disc.png" className={aboutStyle.discMobile} alt="Disc" />
          <br />
          Where is everyone? We have been listening for messages from outer
          space for more than half a century, and so far... silence. Why? Are we
          truly alone in the universe? Or is everyone else acting like us and
          just doing a lot of listening? Maybe we need to be louder. Maybe we
          need to send more messages out there. But how do you write a letter to
          an extraterrestrial whose language and culture and biology and mind we
          have no concept of? And what do you say? And given all of the unknowns
          about what they might be... should we say anything at all? And there
          are many entertaining theories that attempt to explain it. One
          explanation is the theory that whenever two civilizations meet,
          destruction always results.
        </p>
        <div className={aboutStyle.poem}>
          <div>
            <img src="disc.png" className={aboutStyle.disc1} alt="Disc" />
            <img src="disc.png" className={aboutStyle.disc2} alt="Disc" />
            <img src="disc.png" className={aboutStyle.disc3} alt="Disc" />
          </div>
          <p>
            Look again at that dot. That's here. That's home. That's us. On it
            everyone you love, everyone you know, everyone you ever heard of,
            every human being who ever was, lived out their lives. The aggregate
            of our joy and suffering, every saint and sinner in the history of
            our species lived there-on a mote of dust suspended in a sunbeam
            <span className={aboutStyle.signature}>- Carl Sagan</span>
          </p>
        </div>
      </section>
    </>
  );
}

// import aboutStyle from "./about.module.scss";
// import { GoNorthStar } from "react-icons/go";

// export function About() {
//   return (
//     <>
//       <section className={aboutStyle.aboutSection} id="main-title">
//         <div className={aboutStyle.heroSection}>
//           {/* <div className={aboutStyle.heroImage}>
//             <img
//               src="/lageos.png"
//               alt="Lageos Plaque"
//               className={aboutStyle.lageos}
//             />
//           </div> */}
//           <div className={aboutStyle.heroTitle}>
//             <h1>
//               <span>ARCHIVE OF</span>
//               <div className={aboutStyle.secondLine} id="about-section">
//                 <span>THE</span>{" "}
//                 <span className={aboutStyle.stroke}>UNHEARD</span>
//               </div>
//             </h1>
//           </div>
//         </div>
//         <div className={aboutStyle.stars}>
//           <GoNorthStar />
//           <GoNorthStar />
//           <GoNorthStar />
//         </div>
//       </section>
//       <section className={aboutStyle.aboutText}>
//         <p>
//           Ever since I was a kid, I've wanted to design a message that is sent
//           to outer space. A sort of hello from Earth to whatever
//           extraterrestrials might be out there. I mean, come on, to be the
//           author of the first thing aliens ever heard from our entire planet
//           would be a fantastic honor. And as it turns out, an opportunity to
//           send a message to space has been given to me. But it might be a waste
//           of time. What if there isn't anything or anyone out there to receive
//           it? The fact that we still have no evidence of intelligent alien life
//           despite the high probability that such life exists, is called the
//           Fermi paradox.
//           <br />
//           <br />
//           Where is everyone? We have been listening for messages from outer
//           space for more than half a century, and so far... silence. Why? Are we
//           truly alone in the universe? Or is everyone else acting like us and
//           just doing a lot of listening? Maybe we need to be louder. Maybe we
//           need to send more messages out there. But how do you write a letter to
//           an extraterrestrial whose language and culture and biology and mind we
//           have no concept of? And what do you say? And given all of the unknowns
//           about what they might be... should we say anything at all? And there
//           are many entertaining theories that attempt to explain it. One
//           explanation is the theory that whenever two civilizations meet,
//           destruction always results.
//         </p>
//         <div className={aboutStyle.poem}>
//           <div>
//             <img src="disc.png" className={aboutStyle.disc1} alt="Disc" />
//             <img src="disc.png" className={aboutStyle.disc2} alt="Disc" />
//             <img src="disc.png" className={aboutStyle.disc3} alt="Disc" />
//           </div>
//           <p>
//             Look again at that dot. That's here. That's home. That's us. On it
//             everyone you love, everyone you know, everyone you ever heard of,
//             every human being who ever was, lived out their lives. The aggregate
//             of our joy and suffering, every saint and sinner in the history of
//             our species lived there-on a mote of dust suspended in a sunbeam
//             <span className={aboutStyle.signature}>- Carl Sagan</span>
//           </p>
//         </div>
//       </section>
//     </>
//   );
// }
