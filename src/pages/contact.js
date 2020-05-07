import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

import hog from "./my_hog_2019.jpg"
import aura from "./aura.jpg"
import contactStyles from "./contact.module.scss"

const Contact = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <div className={contactStyles.aboutWrapper}>
        <section className={contactStyles.contactSection}>
          <h2>About</h2>
          <p>
            Web graphic designer motion generalist from Toronto living in New
            York.
          </p>
          <p>
            <em>Currently</em>: Bloomberg News, Special Features.
          </p>
          <p>
            <em>Previously</em>: digital advertising art director (clients: TD
            Bank, Motorola, Coke, Microsoft, Weather Network, Mitsubishi,
            Intuit, Hersheys, SC Johnson, Robin Hood Flour, HP, Hong Kong
            Tourism Board, Hellmans, Export Development Canada, The Bay,
            Carrabas, Smuckers).
          </p>
          <a href="mailto:stephcdavidson@gmail.com">email</a> <br />
          <a
            href="https://twitter.com/stephcd"
            target="blank"
            rel="noopener noreferrer"
          >
            twitter
          </a>{" "}
          <p>
            <img src={aura} style={{ width: "300px" }} alt="aura" />
          </p>
        </section>

        <section className={contactStyles.powerLevelsSection}>
          <h2>Power levels</h2>
          <div className={contactStyles.powerBars}>
            <div className={contactStyles.label}>Photoshop</div>
            <div className={contactStyles.powerBar}>
              <div className={contactStyles.level4}></div>
            </div>
            <div className={contactStyles.label}>Illustrator</div>
            <div className={contactStyles.powerBar}>
              <div
                className={contactStyles.level4}
                style={{ animationDelay: ".5s" }}
              ></div>
            </div>
            <div className={contactStyles.label}>After Effects</div>
            <div className={contactStyles.powerBar}>
              <div className={contactStyles.level4}></div>
            </div>
            <div className={contactStyles.label}>Figma</div>
            <div className={contactStyles.powerBar}>
              <div
                className={contactStyles.level4}
                style={{ animationDelay: ".5s" }}
              ></div>
            </div>
            <div className={contactStyles.label}>Premiere</div>
            <div className={contactStyles.powerBar}>
              <div
                className={contactStyles.level1}
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
            <div className={contactStyles.label}>C4D</div>
            <div className={contactStyles.powerBar}>
              <div className={contactStyles.level3}></div>
            </div>
            <div className={contactStyles.label}>Maya</div>
            <div className={contactStyles.powerBar}>
              <div
                className={contactStyles.level1}
                style={{ animationDelay: ".6s" }}
              ></div>
            </div>
            <div className={contactStyles.label}>HTML</div>
            <div className={contactStyles.powerBar}>
              <div className={contactStyles.level4}></div>
            </div>
            <div className={contactStyles.label}>Javascript</div>
            <div className={contactStyles.powerBar}>
              <div className={contactStyles.level1}></div>
            </div>
            <div className={contactStyles.label}>CSS</div>
            <div className={contactStyles.powerBar}>
              <div
                className={contactStyles.level3}
                style={{ animationDelay: ".85s" }}
              ></div>
            </div>
            <div className={contactStyles.label}>ABLETON</div>
            <div className={contactStyles.powerBar}>
              <div
                className={contactStyles.level3}
                style={{ animationDelay: ".5s" }}
              ></div>
            </div>
            <div className={contactStyles.label}>AUDITION</div>
            <div className={contactStyles.powerBar}>
              <div className={contactStyles.level2}></div>
            </div>
          </div>
        </section>

        <section className={contactStyles.rigSection}>
          <h2>My rig</h2>
          <img src={hog} alt="my rendering hog" />
          <ul>
            <li>Thermaltake Core P3 Snow Edition ATX</li>
            <li>AMD Ryzen 7 3700x</li>
            <li>Gigabyte X570 Aorus Ultra ATX AM4</li>
            <li>G.Skill Trident Z RGB 16GB x 4</li>
            <li>Asus GeForce RTX 2080 Ti</li>
            <li>Thermaltake Toughpower Grand RGB 850W PSU</li>
            <li>Samsung 970 Pro 512GB M.2 SSD</li>
            <li>Western Digital Caviar Black 500gb</li>
            <li>Aliexpress dust cover (purple)</li>
          </ul>
        </section>

        <section>
          <h2>Cool web friends :)</h2>
          <ul>
            <li>
              <a
                href="https://scottgelber.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Scott Gelber
              </a>
            </li>
            <li>
              <a
                href="https://tracyma.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tracy Ma
              </a>
            </li>
            <li>
              <a
                href="http://www.wilsoncameron.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wilson Cameron
              </a>
            </li>
            <li>
              <a
                href="https://doomtickler.bandcamp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Doom Tickler
              </a>
            </li>
            <li>
              <a
                href="https://jamespants.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                James Pants
              </a>
            </li>
            <li>
              <a
                href="https://www.traceloops.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Traceloops
              </a>
            </li>
            <li>
              <a
                href="http://laurelschwulst.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Laurel Schwulst
              </a>
            </li>
            <li>
              <a
                href="http://cdxs.ist/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Becca Abbe
              </a>
            </li>
            <li>
              <a
                href="https://cargocollective.com/chrismaggio"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chris Maggio
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a
                href="http://www.txtbooks.us/"
                target="_blank"
                rel="noopener noreferrer"
              >
                TXTbooks
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2>Sick websites</h2>
          <ul>
            <li>
              <a
                href="http://hallointer.net/"
                target="_blank"
                rel="noopener noreferrer"
              >
                hallointer.net
              </a>
            </li>
            <li>
              <a
                href="https://www.matrixsynth.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                MatrixSynth
              </a>
            </li>
            <li>
              <a
                href="http://ultrazapping.tumblr.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ultrazapping
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/user/Jexus"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jexus
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCnIrLy19cFV50Eai8Xj-ArA/featured"
                target="_blank"
                rel="noopener noreferrer"
              >
                Snake Discovery
              </a>
            </li>
            <li>
              <a
                href="https://pcpartpicker.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                PC Part Picker
              </a>
            </li>
            <li>
              <a
                href="https://www.cartoonbrew.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cartoon Brew
              </a>
            </li>
            <li>
              <a
                href="http://lesterbanks.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lester Banks
              </a>
            </li>
          </ul>
        </section>
      </div>
    </Layout>
  )
}

export default Contact
