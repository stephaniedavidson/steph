import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

import hog from "./my_hog_2019.jpg"
import contactStyles from "./contact.module.scss"

const Contact = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>About</h1>
      <p>Graphic designer from Toronto living in New York. </p>
      <p>
        <img src="https://66.media.tumblr.com/0857d4ac5e1127c0bbd12e60d433138f/tumblr_ntnf33hIie1qzy1h1o1_500.gif" />
      </p>

      <section>
        <h2>Contact</h2>
        <a href="mailto:stephcdavidson@gmail.com">my email</a>
      </section>

      <section>
        <h2>Power levels</h2>
        <div className={contactStyles.powerBars}>
          <div className={contactStyles.label}>Photoshop</div>
          <div className={contactStyles.powerBar}>
            <div className={contactStyles.level4}></div>
          </div>
          <div className={contactStyles.label}>Illustrator</div>
          <div className={contactStyles.powerBar}>
            <div className={contactStyles.level4}></div>
          </div>
          <div className={contactStyles.label}>Figma</div>
          <div className={contactStyles.powerBar}>
            <div className={contactStyles.level3}></div>
          </div>
          <div className={contactStyles.label}>After Effects</div>
          <div className={contactStyles.powerBar}>
            <div className={contactStyles.level4}></div>
          </div>
          <div className={contactStyles.label}>C4D</div>
          <div className={contactStyles.powerBar}>
            <div className={contactStyles.level3}></div>
          </div>
          <div className={contactStyles.label}>HTML</div>
          <div className={contactStyles.powerBar}>
            <div className={contactStyles.level2}></div>
          </div>
          <div className={contactStyles.label}>ABLETON</div>
          <div className={contactStyles.powerBar}>
            <div className={contactStyles.level3}></div>
          </div>
          <div className={contactStyles.label}>AUDITION</div>
          <div className={contactStyles.powerBar}>
            <div className={contactStyles.level2}></div>
          </div>
          <div className={contactStyles.label}>CSS</div>
          <div className={contactStyles.powerBar}>
            <div className={contactStyles.level2}></div>
          </div>
          <div className={contactStyles.label}>Javascript</div>
          <div className={contactStyles.powerBar}>
            <div className={contactStyles.level1}></div>
          </div>
        </div>
      </section>

      <section>
        <h3>My rig</h3>
        <img src={hog} alt="my rendering hog" />
        <ul className={contactStyles.myRig}>
          <li>Thermaltake Core P3 Snow Edition ATX</li>
          <li>AMD Ryzen 7 3700x</li>
          <li>Gigabyte X570 Aorus Ultra ATX AM4</li>
          <li>G.Skill Trident Z RGB 16GB x 4</li>
          <li>Asus GeForce RTX 2080 Ti</li>
          <li>Thermaltake Toughpower Grand RGB 850W PSU</li>
          <li>Samsung 970 Pro 512GB M.2 SSD</li>
          <li>Western Digital Caviar Black 500gb</li>
        </ul>
      </section>
    </Layout>
  )
}

export default Contact
