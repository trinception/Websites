import Image from "next/image";
import Link from 'next/link';

import styles from "./page.module.css";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <main className={styles.main}>
        <div className={styles.cursor}></div>
        <div className={styles.navContainer}>

          <nav>
            <ul className={styles.navBar}>

              <li >
                <Link className={styles.current} href="/" data-item='Home'>Home</Link>
              </li>

              <li>
                <Link className={styles.listItem} href="/projects" data-item='Projects'>Projects</Link>
              </li>

              <li>
                <Link className={styles.listItem} href="/about" data-item='About'>About</Link>
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

        <div className={styles.sectionContainer}>

          <div className={styles.section}>

            <div className={styles.introSection}>

              <div className={styles.imageContainer}>
                <img src="./imgs/h-4.png" alt="computer" title="Trinception" width="100%" height="100%"  />
              </div>

              <div className={styles.center}>
                 <p > <span className={styles.nameIcon}>Hi! My name is Trinity</span> <a className={styles.wave}>&#128075;</a> <br />
                 I am a <span className={styles.wordHighlightPassion}>Machine Learning Research Assistant</span> in Vancouver, Canada
                 who is fascinated by all things data, AI, and programming. </p>

                 <div className={styles.buttons}>
                  <ul className={styles.wrapper}>
                     <li className={styles.icon}>

                          <span className={styles.tooltip}>GitHub</span>
                          <a title="GitHub" target="_blank" href="https://github.com/trinception" rel="noopener noreferrer" >
                            <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" title="GitHub" data-name="Layer 1" viewBox="0 0 24 24" id="github">
                              <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
                            </svg>
                          </a>


                      </li>
                      <li className={styles.icon} >

                          <span className={styles.tooltip}>LinkedIn</span>
                          <a target="_blank" href="https://www.linkedin.com/in/trinity-e-b633812b4" rel="noopener noreferrer" >
                            <img width="40" height="40" src="./imgs/linkedin.svg" alt="LinkedIn" title="LinkedIn" data-name="Layer 1" viewBox="0 0 24 24" id="linkedin"></img>
                          </a>

                       </li>
                       <li className={styles.icon}>

                        <span className={styles.tooltip}>Contact</span>
                        <a href="/contact">
                           <img width="40" height="40" src="./imgs/mail.png" alt="Email" title="Contact Me" data-name="Layer 1" viewBox="0 0 24 24" id="mail"></img>
                        </a>

                      </li>
                    </ul>


                </div>

              </div>


            </div>

          </div>



        </div>



        <div className={styles.sectionContainer2}>

          <div className={styles.techLogos}>
            <div className={styles.movementBar}>
              <div className={styles.track}>
                <img src="./imgs/C++_logo.png" alt="C++" title="C++" width="auto" height="100"/>
                <img src="./imgs/JS.png" alt="JavaScript" title="JavaScript" width="auto" height="100"/>
                <img src="./imgs/nextjs.png" alt="NextJS" title="NextJS" width="auto" height="100"/>
                <img src="./imgs/node-js.svg" alt="node.js" title="node.js" width="auto" height="100" />
                <img src="./imgs/python.png" alt="Python" title="Python" width="auto" height="100"/>
                <img src="./imgs/React-icon.svg.png" alt="React" title="React" width="auto" height="100"/>
                <img src="./imgs/java-icon.png" alt="Java" title="Java" width="auto" height="100"/>
                <img src="./imgs/SQL.png" alt="SQL" title="SQL" width="auto" height="100"/>
                <img src="./imgs/html.png" alt="HTML" title="HTML5" width="auto" height="100"/>
                <img src="./imgs/CSS.png" alt="CSS" title="CSS3" width="auto" height="100"/>

                <img src="./imgs/C++_logo.png" alt="C++" title="C++" width="auto" height="100"/>
                <img src="./imgs/JS.png" alt="JavaScript" title="JavaScript" width="auto" height="100"/>
                <img src="./imgs/nextjs.png" alt="NextJS" title="NextJS" width="auto" height="100"/>
                <img src="./imgs/node-js.svg" alt="node.js" title="node.js" width="auto" height="100" />
                <img src="./imgs/python.png" alt="Python" title="Python" width="auto" height="100"/>
                <img src="./imgs/React-icon.svg.png" alt="React" title="React" width="auto" height="100"/>
                <img src="./imgs/java-icon.png" alt="Java" title="Java" width="auto" height="100"/>
                <img src="./imgs/SQL.png" alt="SQL" title="SQL" width="auto" height="100"/>
                <img src="./imgs/html.png" alt="HTML" title="HTML5" width="auto" height="100"/>
                <img src="./imgs/CSS.png" alt="CSS" title="CSS3" width="auto" height="100"/>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.projectSection}>
              <p className={styles.wave}>&#128187;</p> <a className={styles.nameIcon}>Projects</a>
              <p> This is a glimpse of my work. Only my portfolio sites are on my <a className={styles.wordHighlightClickMe} title="Click Me!" target="_blank" href="https://github.com/trinception" rel="noopener noreferrer">GitHub</a>.
              For any specific inquiries on projects, <a className={styles.wordHighlightSubtle} title="Click Me!" target="_blank" href="/contact" rel="noopener noreferrer">Contact Me</a>.</p>
              <ul className={styles.grid}>

                <ProjectCard project={{
                        title: "Portfolio Website",
                        languages: "HTML, CSS, JS, PHP",
                        technologies: "NextJS, React, Bootstrap",
                        description: "Built my portfolio website from scratch. Includes interactive, dynamic elements, and a variety of unique features and easter eggs such as an AI chatbot.",
                        fullDescription: ""
                      }} />

                <ProjectCard project={{
                        title: "Book Recommendation System",
                        languages: "Python",
                        technologies: "Amazon API, Goodreads API",
                        description: "Developed a collaborative filtering recommendation system in Python, leveraging existing book  rating databases, processed using Pandas, and implementing",
                        fullDescription: "a user database using SQL. Currently enhancing the project by creating a web-based front-end to offer users more interactive features."
                      }} />

                <ProjectCard project={{
                        title: "(Research) The ContEgo Salsa Dataset",
                        languages: "hsl",
                        technologies: "Vicon Shogun Live, Vicon Shogun Post, Blender",
                        description: "Co-authored motion capture dataset of salsa dancers from various levels (beginner, intermediate, professional) improvising over a ",
                        fullDescription: "variety of different music styles and tempos. \n Current uses: Training ML Motion Style Transfer algorithms for use in technologies such as generative AI. \n Potential uses/applications: Gaming, TV, & Movies (generating realistic CGI character movement), Dance training and evaluation, etc. \n About my role: Co-author. Set up and calibrated our motion capture lab space, managed software migration and maintained our usage of the most modern software possible, perfected our data collection pipeline, ran participant recruitment and scheduling, and performed the actual data collection."
                      }} />


                <ProjectCard project={{
                        title: "Full-Stack Multi-user gaming site",
                        languages: "HTML, CSS, JavaScript, SQL",
                        technologies: "Heroku, Socket.io, NodeJS, PostGreSQL",
                        description: "Developed a full stack web-based racing game application allowing users to create profiles, add friends, engage in real-time chat, and compete against",
                        fullDescription: "each other. Implemented using JavaScript for frontend interactivity, HTML/CSS for styling, Node.js for server-side logic, PostgreSQL for database management, and Socket.IO for real-time communication. Successfully integrated multiple technologies to deliver an immersive gaming experience with social interaction features."
                      }} />
              </ul>

              <ul className={styles.wrapper}>

                  <li className={styles.icon}>

                     <button className={styles.btn}>
                       <a  title="Click Me!" target="_blank" href="https://github.com/trinception" rel="noopener noreferrer" >
                         <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="github">
                           <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
                         </svg>
                       </a>
                     </button>

                   </li>

                   <li className={styles.icon}>

                        <button className={styles.btn}>

                            <a className={styles.btnWords} href="/projects">See More Projects...</a>

                        </button>

                    </li>
              </ul>
            </div>
          </div>

        </div>



        <div className={styles.sectionContainer}>

          <div className={styles.section}>
            <div className={styles.aboutSection}>

                <div className={styles.imageContainer}>
                    <img src="./imgs/h-6.png" alt="computer" title="Trinception" width="100%" height="100%"/>
                </div>

                <div className={styles.talking}>
                  <p className={styles.nameIcon}>About Me</p>

                  <p>
                    My passion for <span className={styles.wordHighlightSubtle}>software engineering and development</span> began in my first year of university.
                    I love to create and explore different ways to solve new problems, in addition to enjoying the process of refining and perfecting pre-existing solutions.
                    I have a BSc. in <span className={styles.wordHighlightSubtle}>Mathematics & Computer Science</span> (couldn’t pick just one!) from Simon Fraser University.
                    I am currently working as a Machine Learning Research Assistant at the AI robotics lab <a className={styles.wordHighlightClickMe} title="Click Me!" target="_blank" href="https://www.rosielab.ca" rel="noopener noreferrer">ROSIE Labs</a> in Vancouver, BC.
                    <br/>
                    <br/>
                    Want to know more? Send me an email or talk to my <a className={styles.wordHighlightClickMe} title="Click Me!" href="/about" rel="noopener noreferrer">PortfolioBot</a> on my 'about' page, an AI chatbot I created that knows my skillset, experience, and even my hobbies!
                  </p>

                </div>

                <ul className={styles.wrapper}>

                    <li className={styles.icon}>

                      <button className={styles.btn}>
                        <a href="/contact">
                          <img width="30" height="30" src="./imgs/mail.png" alt="Email" title="Contact Me" data-name="Layer 1" viewBox="0 0 24 24" id="mail"></img>
                        </a>
                       </button>

                     </li>

                     <li className={styles.icon}>

                          <button className={styles.btn}>

                              <a className={styles.btnWords} href="/about">About Me...</a>

                          </button>

                      </li>
                </ul>

            </div>

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
