import Image from "next/image";
import RadialGradient from '@/components/RadialGradient'
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>

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

              <li>
                <a className={styles.listItem} href='./projects.html' data-item='Projects'>Projects</a>
              </li>
              
              <li>
                <a className={styles.listItem} href='./about.html' data-item='About'>About</a>
              </li>

            </ul>
          </nav>

          <label className={styles.styleToggle}>

              <div className={styles.toggle}>
                  <input className={styles.toggleState} type="checkbox" name="check" value="check"/>
                  <div className={styles.indicator}></div>
              </div>

          </label>
        </div>

        <div className={styles.sectionContainer}>

          <div className={styles.section}>

            <div className={styles.introSection}>
              <div className={styles.center}>
                 <p> <span className={styles.nameIcon}>Hi! My name is Trinity</span> &#128075; <br />
                 I am a <span className={styles.wordHighlightPassion}>Machine Learning Research Assistant</span> in Vancouver, Canada
                 who is fascinated by all things data, AI, and programming.
                 I love problem solving and finding creative solutions to both new and old problems. </p>

                 <div className={styles.buttons}>
                   <button>GitHub</button>
                   <button>LinkedIn</button>
                   <button>Contact Me</button>
                  </div>

              </div>

              <div className={styles.imageContainer}>
                <img src="./imgs/h-4.png" alt="computer" title="Trinception" width="auto" height="auto"/>
              </div>
            </div>

          </div>



        </div>



        <div className={styles.sectionContainer2}>

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
              <p> This is a glimpse of my work. Few of my projects are on my <span className={styles.wordHighlightSubtle}>GitHub</span>, so
              for any specific inquiries on projects, <span className={styles.wordHighlightPassion}>Contact Me</span>.</p>
              <ul className={styles.grid}>
                <div className={styles.card}>

                    <div className="project1">
                      <h2>Portfolio Websites</h2>
                      <h4>Language(s): HTML,CSS, JS</h4>
                      <h4>Library(s): React, Bootstrap</h4>
                    </div>
                    <button>Github</button>
                </div>

                <div className={styles.card}>

                  <div className="project1">
                    <h2>Book Recommendation System & Library Database</h2>
                    <h4>Language(s): Python</h4>
                    <h4>Data source(s): Amazon API, Goodreads API</h4>
                  </div>

                  <button>Github</button>
                </div>

                <div className={styles.card}>

                    <div className="project1">
                      <h2>(Research) Motion Style Transfer and the ContEgo Salsa Dataset</h2>
                      <p></p>
                    </div>

                </div>

              </ul>

              <button>See more projects...</button>
              <button>Github</button>
              <button>Contact Me</button>
            </div>
          </div>

        </div>



        <div className={styles.sectionContainer}>

          <div className={styles.section}>
            <div className={styles.aboutSection}>

              <div className={styles.aboutBlurb}>
                <img src="./imgs/h-6.png" alt="computer" title="Trinception" width="400px;" height="auto"/>
                <div className={styles.talking}>
                  <p className={styles.nameIcon}>About Me</p>

                  <p>
                    My passion for <span className={styles.wordHighlightSubtle}>software engineering and development</span> began in my first year of university.
                    I love to create and explore different ways to solve new problems, in addition to enjoying the process of refining and perfecting pre-existing solutions.
                    I have a BSc. in <span className={styles.wordHighlightSubtle}>Mathematics & Computer Science</span> (couldn’t pick just one!) from Simon Fraser University.
                    I am currently working as a Machine Learning Research Assistant at the AI robotics lab <span href='https://www.rosielab.ca' className={styles.wordHighlightClickMe}>ROSIE Labs</span> in Vancouver, BC.
                    <br/>
                    <br/>
                    When I’m not working on projects or in the lab, I’m curled up with a <span className={styles.easterEggB}>good book</span>, hiking around beautiful British Columbia, or collecting Korok seeds.
                    I love tea, torrential rain, and the <span className={styles.easterEggT}>Twilight soundtrack</span>.
                  </p>
                </div>
              </div>
              <div className={styles.chatbot}>

              </div>

            </div>
          </div>
        </div>

        <div className={styles.footerContainer}>

          <div className={styles.footer}>

              <div className={styles.aboutBlurb}>
                <p>Hello There!</p>
                <p>This website is best viewed on desktop</p>
                <p>trinityevansphoto@gmail.com</p>
                <p>Made by Trinity Evans </p>
              </div>

          </div>
        </div>

    </main>
  );
}
