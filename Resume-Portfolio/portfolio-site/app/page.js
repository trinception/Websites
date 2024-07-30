import Image from "next/image";
import Link from 'next/link';

import RadialGradient from '@/components/RadialGradient'

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>

        <div className={styles.navContainer}>

          <nav>
            <ul className={styles.navBar}>

              <li >

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
              </li>

              <li>
                <Link className={styles.listItem} href="/projects" data-item='Projects'>Projects</Link>
              </li>

              <li>
                <Link className={styles.listItem} href="/about" data-item='About'>About</Link>
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
                 <p > <span className={styles.nameIcon}>Hi! My name is Trinity</span> <a className={styles.title}>&#128075;</a> <br />
                 I am a <span className={styles.wordHighlightPassion}>Machine Learning Research Assistant</span> in Vancouver, Canada
                 who is fascinated by all things data, AI, and programming.
                 I love problem solving and finding creative solutions to both new and old problems. </p>

                 <div className={styles.buttons}>
                  <ul className={styles.wrapper}>
                     <li className={styles.icon}>

                        <button as={Link} href="https://github.com/trinception/Websites" className={styles.btn}>
                          <svg width="40" height="40" fill="#0092E4" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="github">
                            <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
                          </svg>
                        </button>

                      </li>
                      <li className={styles.icon} >
                        <button className={styles.btn} >
                          <svg width="40" height="40" fill="#0092E4" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="github" >
                            <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
                          </svg>
                         </button>
                       </li>
                       <li className={styles.icon}>
                         <button className={styles.btn}>
                           <svg width="40" height="40" fill="#0092E4" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="github">
                             <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
                           </svg>
                          </button>
                        </li>
                    </ul>


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
              <p className={styles.title}>&#128187; <a className={styles.nameIcon}>Projects</a></p>
              <p> This is a glimpse of my work. Only my portfolio sites are on my <span className={styles.wordHighlightSubtle}>GitHub</span>.
              For any specific inquiries on projects, <span className={styles.wordHighlightSubtle}>Contact Me</span>.</p>
              <ul className={styles.grid}>
                <div className={styles.card}>

                    <div className="project1">
                      <h2>Portfolio Websites</h2>
                      <h4>Language(s): HTML,CSS, JS</h4>
                      <h4>Library(s): React, Bootstrap</h4>
                      <p> When building my website, I had many ideas and wanted to execute all of them. I decided to implement a few and select the strongest as my official site, but keep the code of the others.</p>
                    </div>

                </div>

                <div className={styles.card}>

                  <div className="project1">
                    <h2>Book Recommendation System & Library Database</h2>
                    <h4>Language(s): Python</h4>
                    <h4>Data source(s): Amazon API, Goodreads API</h4>
                  </div>


                </div>

                <div className={styles.card}>

                    <div className="project1">
                      <h2>(Research) Motion Style Transfer and the ContEgo Salsa Dataset</h2>
                      <p>Collected and processed a motion capture dataset of salsa dancers at various skill levels performing freestyle dance. This data was then used to train an LLM algorithm which can be used for motion style transfer. Motion style transfer is the process of artificially creating a performer of a certain skill, either with an input or without.</p>
                    </div>

                </div>

                <div className={styles.card}>

                    <div className="project1">
                      <h2>Multi-user gaming site</h2>
                      <p>Collected and processed a motion capture dataset of salsa dancers at various skill levels performing freestyle dance. This data was then used to train an LLM algorithm which can be used for motion style transfer. Motion style transfer is the process of artificially creating a performer of a certain skill, either with an input or without.</p>
                    </div>

                </div>

              </ul>

              <ul className={styles.wrapper}>

                  <li className={styles.icon}>
                    <button className={styles.btn}>
                      <svg width="40" height="40" fill="#0092E4" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="github">
                        <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
                      </svg>
                     </button>
                   </li>

                   <li className={styles.icon}>

                        <button className={styles.btn}>

                            <a href="/projects">See More...</a>

                        </button>

                    </li>
              </ul>
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
                    I am currently working as a Machine Learning Research Assistant at the AI robotics lab <a className={styles.wordHighlightClickMe} title="Click Me!" target="_blank" href="https://www.rosielab.ca" rel="noopener noreferrer">ROSIE Labs</a> in Vancouver, BC.
                    <br/>
                    <br/>
                    When I’m not working on projects or in the lab, I’m curled up with a <a className={styles.wordHighlightSubtle} title="Click Me!" target="_blank" href="https://www.goodreads.com/user/show/91516902-trinity" rel="noopener noreferrer">good book</a>&#128218;,
                     hiking around beautiful British Columbia, or collecting <a className={styles.wordHighlightSubtle} title="Click Me!" target="_blank" href="https://zelda.fandom.com/wiki/Korok_Seed" rel="noopener noreferrer">Korok seeds</a>.
                    I love tea, my plants, and the sound of rain.
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
                <p className={styles.wordHighlightClickMe}>Hello There!</p>
                <p>trinityevansphoto@gmail.com</p>
                <p>This website is best viewed on desktop</p>
                <p>Made by Trinity Evans </p>
              </div>

          </div>
        </div>

    </main>
  );
}
