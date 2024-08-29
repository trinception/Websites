
import Image from "next/image";
import Link from 'next/link';

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>

        <div className={styles.navContainer}>

            <nav>
              <ul className={styles.navBar}>

                <li >
                  <Link className={styles.listItem} href="/" data-item='Home'>Home</Link>
                </li>

                <li>
                  <Link className={styles.listItem} href="/projects" data-item='Projects'>Projects</Link>
                </li>

                <li>
                  <Link className={styles.current} href="/about" data-item='About'>About</Link>
                </li>

              </ul>
            </nav>
            <div className={styles.upperCorner}>

                  <div>
                    <Link href="/" data-item='Home'>
                      <Image
                        src="/h.svg"
                        alt="Trinity Evans"
                        className={styles.nameLogo}
                        width={70}
                        height={45}
                        priority
                      />
                    </Link>
                  </div>


            </div>


        </div>

        <div className={styles.aboutBlurb}>

          <div className={styles.titlePicContainer}>
            <p className={styles.nameIcon}>About Me</p>
            <div className={styles.imageContainer}>
              <img width="100%" height="auto" className={styles.portrait} src="./imgs/grad.jpg" alt="Picture of Trinity at university graduation" title="Trinity" data-name="Layer 1" viewBox="0 0 24 24" id="trinity"></img>
            </div>
          </div>
          <p>
            My passion for <span className={styles.wordHighlightSubtle}>software engineering and development</span> began in my first year of university.
            I love to create and explore different ways to solve new problems, in addition to enjoying the process of refining and perfecting pre-existing solutions.
            I have a BSc. in <span className={styles.wordHighlightSubtle}>Mathematics & Computer Science</span> (couldn’t pick just one!) from Simon Fraser University.
            I am currently working as a Machine Learning Research Assistant at the AI robotics lab <a className={styles.wordHighlightClickMe} title="Click Me!" target="_blank" href="https://www.rosielab.ca" rel="noopener noreferrer">ROSIE Labs</a> in Vancouver, BC.
            <br/>
            <br/>
            When I’m not working on projects or in the lab, I’m curled up with a <a className={styles.wordHighlightSubtle} title="Click Me!" target="_blank" href="https://www.goodreads.com/user/show/91516902-trinity" rel="noopener noreferrer">good book</a>&#128218;,
             hiking around beautiful British Columbia, or collecting <a className={styles.wordHighlightSubtle} title="Click Me!" target="_blank" href="https://zelda.fandom.com/wiki/Korok_Seed" rel="noopener noreferrer">Korok seeds</a>.
            I love tea, my plants &#127793;, and the sound of rain.
            <br/>
            <br/>
            Want to know more? Send me an email or talk to my <a className={styles.wordHighlightClickMe} title="Click Me!" href="/about" rel="noopener noreferrer">PortfolioBot</a>, an AI chatbot I created that knows my skillset, experience, and even my hobbies!
          </p>
        </div>

        <div className={styles.section}>

          <div className={styles.imageContainer}>
            <img src="./imgs/h-10.png" alt="computer" title="Trinception" width="100%" height="100%"/>
          </div>
          <div className={styles.chatBotContainer}>

          </div>

        </div>

        <div className={styles.footerContainer}>
          <div className={styles.footerSection}>

            <div className={styles.footer}>

                <div className={styles.footerBlurb}>
                  <p className={styles.wordHighlightClickMe}>Hello There!</p>

                  <p>This website is best viewed on a desktop!</p>
                  <br/>
                  <p>Email me at trinityevansphoto@gmail.com</p>
                  <p>Made by Trinity Evans </p>
                  <br/>
                </div>
                <div className={styles.footerLinks}>
                  <div>
                    <a title="GitHub" target="_blank" href="https://github.com/trinception" rel="noopener noreferrer" >GitHub</a>
                  </div>

                  <div>
                    <a target="_blank" href="https://www.linkedin.com/in/trinity-e-b633812b4" rel="noopener noreferrer" >LinkedIn</a>
                  </div>

                  <div>
                    <a href="/contact">  Contact</a>
                  </div>
                </div>

            </div>
          </div>
        </div>

  </main>
);
}
