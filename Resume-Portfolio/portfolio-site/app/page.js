import Image from "next/image";
import RadialGradient from '@/components/RadialGradient'
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
        <div className={styles.gradient}>
        </div>
        <div className={styles.navContainer}>

          <nav>
            <ul className={styles.navBar}>

              <li >

                <Image
                  src="/h.svg"
                  alt="Trinity Evans"
                  className={styles.nameLogo}
                  width={70}
                  height={45}
                  priority
                />
              </li>

              <li className={styles.listItem}>
                <a href='./about.html' data-item='About'>About</a>
              </li>
              <li>
                <a className={styles.listItem} href='./projects.html' data-item='Projects'>Projects</a>
              </li>
            </ul>
          </nav>

          <div className={styles.styleToggle}>

              <div className={styles.toggle}>
                  <input class="toggle-state" type="checkbox" name="check" value="check"/>
                  <div className={styles.indicator}></div>
              </div>

          </div>
        </div>
        <div className={styles.section}>

          <div className={styles.center}>
             <p href="#"> <span className={styles.nameIcon}> Hi! My name is Trinity.</span><br />
             I am a Machine Learning Research Assistant in Vancouver, Canada
             who is fascinated by all things data, AI, and programming.
             I love problem solving and finding creative solutions to both new and old problems. </p>

          </div>

          <div className={styles.description}>
              <div class="Skills">
                <h3>Skillset</h3>
                  <p></p>
                <p></p>
              </div>
          </div>


        </div>
        <div className={styles.techLogos}>
          <div className={styles.movementBar}>
            <div className={styles.track}>
              <img src="./imgs/C++_logo.png" alt="C++" title="C++" width="auto" height="128"/>
              <img src="./imgs/JS.png" alt="JavaScript" title="JavaScript" width="auto" height="128"/>
              <img src="./imgs/nextjs.png" alt="NextJS" title="NextJS" width="auto" height="128"/>
              <img src="./imgs/node-js.svg" alt="node.js" title="node.js" width="auto" height="128" />
              <img src="./imgs/python.png" alt="Python" title="Python" width="auto" height="128"/>
              <img src="./imgs/React-icon.svg.png" alt="React" title="React" width="auto" height="128"/>
              <img src="./imgs/java-icon.png" alt="Java" title="Java" width="auto" height="128"/>
              <img src="./imgs/SQL.png" alt="SQL" title="SQL" width="auto" height="128"/>
              <img src="./imgs/html.png" alt="HTML" title="HTML5" width="auto" height="128"/>
              <img src="./imgs/CSS.png" alt="CSS" title="CSS3" width="auto" height="128"/>

              <img src="./imgs/C++_logo.png" alt="C++" title="C++" width="auto" height="128"/>
              <img src="./imgs/JS.png" alt="JavaScript" title="JavaScript" width="auto" height="128"/>
              <img src="./imgs/nextjs.png" alt="NextJS" title="NextJS" width="auto" height="128"/>
              <img src="./imgs/node-js.svg" alt="NodeJS" title="node.js" width="auto" height="128"/>
              <img src="./imgs/python.png" alt="Python" title="Python" width="auto" height="128"/>
              <img src="./imgs/React-icon.svg.png" title="React" alt="React" width="auto" height="128"/>
              <img src="./imgs/java-icon.png" alt="Java" title="Java" width="auto" height="128"/>
              <img src="./imgs/SQL.png" alt="SQL" title="SQL" width="auto" height="128"/>
              <img src="./imgs/html.png" alt="HTML" title="HTML5" width="auto" height="128"/>
              <img src="./imgs/CSS.png" alt="CSS" title="CSS3" width="auto" height="128"/>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.projectSection}>
            <p className={styles.nameIcon}>Projects</p>
            <ul>
              <div className="projectCard">

                  <div className="project1">
                    <h3>Portfolio Websites</h3>
                    <h4>Language(s): HTML,CSS, JS</h4>
                    <h4>Library(s): React, Bootstrap</h4>
                  </div>
                  <button>Github</button>
              </div>

              <div className="projectCard">

                <div className="project1">
                  <h3>Book Recommendation System & Library Database</h3>
                  <h4>Language(s): Python</h4>
                  <h4>Data source(s): Amazon API, Goodreads API</h4>
                </div>

                <button>Github</button>
              </div>

              <div className="projectCard">

                <div className="project1">
                  <h3>University Map System</h3>
                </div>
                <button>Github</button>
              </div>

            </ul>

            <button>See more projects...</button>
            <button>Github</button>
            <button>Contact Me</button>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.aboutSection}>

            <div className={styles.aboutBlurb}>
              <h3>About Me</h3>

              <p>
                My passion for <span>software engineering and development</span> began in my first year of university.
                I love to create and explore different ways to solve new problems, in addition to enjoying the process of refining and perfecting pre-existing solutions.
                I have a BSc. in <span>Mathematics & Computer Science</span> (couldn’t pick just one!) from Simon Fraser University.
                I am currently working as an AI and Machine Learning Research Assistant at the robotics lab <span>ROSIE Labs</span> in Vancouver, BC.

                When I’m not working on projects or in the lab, I’m curled up with a good book, hiking around beautiful British Columbia, or collecting Korok seeds.
              </p>
            </div>
            <div className={styles.chatbot}>

            </div>

          </div>
        </div>

    </main>
  );
}
