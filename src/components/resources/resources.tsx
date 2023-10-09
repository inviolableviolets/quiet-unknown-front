import resourcesStyle from "./resources.module.scss";
export function Resources() {
  return (
    <>
      <section
        className={resourcesStyle.resourcesContainer}
        id="resources-section"
      >
        <div className={resourcesStyle.resourcesTitle}>
          <img src="/resources.png" alt="UFOs drawings." />
          <div>
            <h2>Resources</h2>
          </div>
        </div>
        <p>
          Out there are websites like SpaceSpeak.com that allows people to send
          a text in audio or a image message out into space by radio waves. Once
          a photon is broadcast into space, it persists. It never dies. It never
          decays.. Radio waves are just another form of photon. And once a
          photon is broadcast into space, it persists. It never dies. It never
          decays. A million years from now, maybe the earth is gone, maybe the
          solar system is gone, but your message is still out there, and
          essentially become archaeological photons for some future generation
          to see what we were about. <br></br>
          <br></br> Anyway, here are some links you may find interesting:
          <div className={resourcesStyle.links}>
            <ul>
              <li>
                <span className={resourcesStyle.yellow}>//////</span>
                <a href="https://mapoftheuniverse.net/" target="_blank">
                  MAP OF THE OBSERVABLE UNIVERSE
                </a>
              </li>
              <li>
                <span className={resourcesStyle.yellow}>//////</span>
                <a
                  href="https://www.universetoday.com/149410/beyond-fermis-paradox-xvi-what-is-the-dark-forest-hypothesis/"
                  target="_blank"
                >
                  FERMI PARADOX & DARK FOREST
                </a>
              </li>
              <li>
                <span className={resourcesStyle.yellow}>//////</span>
                <a href="https://hubblesite.org/" target="_blank">
                  HUBBLE SPACE SITE
                </a>
              </li>
              <li>
                <span className={resourcesStyle.yellow}>//////</span>
                <a href="https://www.jodcast.net/" target="_blank">
                  THE JODCAST PODCAST
                </a>
              </li>
              <li>
                <span className={resourcesStyle.yellow}>//////</span>
                <a
                  href="https://nssdc.gsfc.nasa.gov/planetary/"
                  target="_blank"
                >
                  LUNAR & PLANETARY NASA DEPT.
                </a>
              </li>
              <li>
                <span className={resourcesStyle.yellow}>//////</span>
                <a
                  href="https://www.space.com/21925-james-webb-space-telescope-jwst.html"
                  target="_blank"
                >
                  JAMES WEBB SPACE TELESCOPE GUIDE
                </a>
              </li>
              <li>
                <span className={resourcesStyle.yellow}>//////</span>
                <a href="https://viewspace.org/" target="_blank">
                  INTERACTIVE VIEWSPACE
                </a>
              </li>
            </ul>
          </div>
        </p>
        <div className={resourcesStyle.final}>
          <span className={resourcesStyle.sagan}>
            “The absence of evidence is not the evidence of absence.”
          </span>
          <span className={resourcesStyle.looking}>Keep looking up</span>
        </div>
      </section>
    </>
  );
}
